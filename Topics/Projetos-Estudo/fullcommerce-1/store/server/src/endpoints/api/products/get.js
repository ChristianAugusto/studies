const handleMysql = require('../../../modules/handles/mysql');



module.exports = async (reqQuery) => {
    try {
        if (reqQuery.productId && !isNaN(+reqQuery.productId)) {
            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: await getProductById(+reqQuery.productId),
                    message: "Success"
                })
            };
        }

        let orderby = '';

        if (reqQuery.orderby) {
            const orderbySplit = reqQuery.orderby.split(',');
            const orderProp = orderbySplit[0].toLowerCase();
            const orderType = orderbySplit[1].toUpperCase();

            const ordenationFields = ['price'];
            const ordenationTypes = ['ASC', 'DESC'];

            if (ordenationFields.indexOf(orderProp) !== -1) {
                orderby += `ORDER BY ${orderProp}`;

                if (ordenationTypes.indexOf(orderType) !== -1) {
                    orderby += ` ${orderType}`;
                }
            }
        }

        if (reqQuery.categoryId && !isNaN(+reqQuery.categoryId)) {
            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: await getProductsByCategoryId(+reqQuery.categoryId, reqQuery.startIndex, reqQuery.lastIndex, orderby),
                    message: "Success"
                })
            };
        }


        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: await getProducts(orderby),
                message: "Success"
            })
        };
    }
    catch (error) {
        console.error('[ERROR] - Error in get /api/products');
        console.error(error);
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






async function getProductsByCategoryId(_categoryId, _startIndex=0, _lastIndex, _orderby) {
    try {
        if (!_lastIndex || (_lastIndex - _startIndex) > +process.env.LIMIT_PRODUCTS_QUERY) {
            _lastIndex = +process.env.LIMIT_PRODUCTS_QUERY + _startIndex;
        }

        const getProductsQuery = `SELECT * FROM products WHERE category_id = ${_categoryId} ${_orderby} LIMIT ${_startIndex},${_lastIndex}`;
        return await handleMysql(getProductsQuery);
    }
    catch (error) {
        return null;
    }
}


async function getProductById(_productId) {
    try {
        const getProductsQuery = `SELECT * FROM products WHERE id = ${_productId}`;
        return await handleMysql(getProductsQuery);
    }
    catch (error) {
        return null;
    }
}


async function getProducts(_orderby) {
    try {
        const getProductsQuery = `SELECT * FROM products ${_orderby} LIMIT 0,${+process.env.LIMIT_PRODUCTS_QUERY}`;
        return await handleMysql(getProductsQuery);
    }
    catch (error) {
        return null;
    }
}