const path = require('path');
const fs = require('fs');

const handleMysql = require('../../modules/handles/mysql');
const replaceShelfs = require('../../modules/placeholders/replaceShelfs');
const replaceHeader = require('../../modules/placeholders/replaceHeader');



module.exports = async (reqParams) => {
    try {
        const category = await getCategoryInfo(reqParams.categorySlug);

        if (!category || !category.initialProducts || category.initialProducts.length == 0) {
            console.log('[ERROR] - No products for category slug')
            throw new Error();
        }

        const categoryLayout = fs.readFileSync(path.join(__dirname, '..', '..', 'public/views/burgerking-category.html'), 'utf8');
        const shelfLayout = fs.readFileSync(path.join(__dirname, '..', '..', 'public/views/layouts/shelf.html'), 'utf8');
        const headerLayout = fs.readFileSync(path.join(__dirname, '..', '..', 'public/views/layouts/header.html'), 'utf8');

        return {
            status: 200,
            headers: {
                'Content-Type': 'text/html'
            },
            body: replacePlaceholders(categoryLayout, headerLayout, shelfLayout, category)
        };
    }
    catch (error) {
        console.log('[ERROR] - Error in getCategoryPage');
        console.log(error);
        return {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: null,
                message: "Internal server error"
            })
        };
    }
};



function replacePlaceholders(_pageLayout, _headerLayout, _shelfLayout, _category) {
    let resultMatch;


    while (resultMatch = _pageLayout.match(/<store:shelf .*\/?>/mi)) {
        _pageLayout = _pageLayout.replace(/<store:shelf .*\/?>/mi, replaceShelfs(resultMatch, _shelfLayout, _category.initialProducts));
    }

    while (resultMatch = _pageLayout.match(/<store:header ?\/?>/mi)) {
        _pageLayout = _pageLayout.replace(/<store:header ?\/?>/mi, replaceHeader(_headerLayout));
    }

    while (resultMatch = _pageLayout.match(/<store:categoryName ?\/?>/mi)) {
        _pageLayout = _pageLayout.replace(/<store:categoryName ?\/?>/mi, _category.info.name);
    }

    while (resultMatch = _pageLayout.match(/<store:categoryId ?\/?>/mi)) {
        _pageLayout = _pageLayout.replace(/<store:categoryId ?\/?>/mi, _category.info.id);
    }

    while (resultMatch = _pageLayout.match(/<store:categoryFilters ?\/?>/mi)) {
        _pageLayout = _pageLayout.replace(/<store:categoryFilters ?\/?>/mi, buildCategoryFilters(_category.filters));
    }



    return _pageLayout;
}



async function getCategoryInfo(_categorySlug, _startIndex=0, _lastIndex) {
    try {
        if (!_lastIndex || (_lastIndex - _startIndex) > +process.env.LIMIT_PRODUCTS_QUERY) {
            _lastIndex = +process.env.LIMIT_PRODUCTS_QUERY + _startIndex;
        }

        const getCategoryIdQuery = `SELECT * FROM categories WHERE slug = '${_categorySlug}'`;
        const [categoryInfo] = await handleMysql(getCategoryIdQuery);


        const getProductsQuery = `SELECT * FROM products WHERE categoryId = ${categoryInfo.id} LIMIT ${_startIndex},${_lastIndex}`;
        const initialProducts = await handleMysql(getProductsQuery);


        const getProducsCharactsQuery = `
            SELECT
                products_characts.label
            FROM
                products_characts, products, product_characts
            WHERE
                products.id = product_characts.productId AND
                products_characts.id = product_characts.charactId AND
                products.categoryId = ${categoryInfo.id}
        `;


        const allProductsCharacts = await handleMysql(getProducsCharactsQuery);

        const filters = [];

        allProductsCharacts.forEach(({ label }) => {
            if (filters.indexOf(label) === -1) {
                filters.push(label);
            }
        });


        return {
            info: categoryInfo,
            initialProducts,
            filters
        };
    }
    catch (error) {
        return null;
    }
}


function buildCategoryFilters(_filters) {
    const filtersItems = _filters.reduce((acc, filter) => acc + `
        <li>
            <h6>${filter}</h6>
        </li>
    `, '');


    return `<ul class="category__filters">${filtersItems}</ul>`;
}