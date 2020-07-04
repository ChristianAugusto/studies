const path = require('path');
const fs = require('fs');

const handleMysql = require('../../modules/handles/mysql');
const replaceShelfs = require('../../modules/placeholders/replaceShelfs');



module.exports = async (reqParams) => {
    try {
        const category = await getProductsByCategorySlug(reqParams.categorySlug);

        if (!category || !category.initialProducts || category.initialProducts.length == 0) {
            console.log('[ERROR] - No products for category slug')
            throw new Error();
        }

        const categoryLayout = fs.readFileSync(path.join(__dirname, '..', '..', 'public/views/burgerking-category.html'), 'utf8');
        const shelfLayout = fs.readFileSync(path.join(__dirname, '..', '..', 'public/views/layouts/shelf.html'), 'utf8');

        return {
            status: 200,
            headers: {
                'Content-Type': 'text/html'
            },
            body: replacePlaceholders(category, categoryLayout, shelfLayout)
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



function replacePlaceholders(_category, _categoryLayout, _shelfLayout) {
    let resultMatch;


    while (resultMatch = _categoryLayout.match(/<store:shelf .*\/>/mi)) {
        _categoryLayout = _categoryLayout.replace(/<store:shelf .*\/>/mi, replaceShelfs(resultMatch, _shelfLayout, _category.initialProducts))
    }


    while (resultMatch = _categoryLayout.match(/<store:categoryName ?\/>/mi)) {
        _categoryLayout = _categoryLayout.replace(/<store:categoryName ?\/>/mi, _category.info.name)
    }

    while (resultMatch = _categoryLayout.match(/<store:categoryId ?\/>/mi)) {
        _categoryLayout = _categoryLayout.replace(/<store:categoryId ?\/>/mi, _category.info.id)
    }


    return _categoryLayout;
}



async function getProductsByCategorySlug(_categorySlug, _startIndex=0, _lastIndex) {
    try {
        if (!_lastIndex || (_lastIndex - _startIndex) > +process.env.LIMIT_PRODUCTS_QUERY) {
            _lastIndex = +process.env.LIMIT_PRODUCTS_QUERY + _startIndex;
        }

        const getCategoryIdQuery = `SELECT id,name,slug FROM categories WHERE slug = '${_categorySlug}'`;
        const [categoryInfo] = await handleMysql(getCategoryIdQuery);


        const getProductsQuery = `SELECT id,name,price,qtdStock,imagePath FROM products WHERE categoryId = ${categoryInfo.id} LIMIT ${_startIndex},${_lastIndex}`;
        const initialProducts = await handleMysql(getProductsQuery);

        return {
            info: categoryInfo,
            initialProducts
        };
    }
    catch (error) {
        return null;
    }
}