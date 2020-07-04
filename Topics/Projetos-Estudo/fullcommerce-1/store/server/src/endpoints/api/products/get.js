const handleMysql = require('../../../modules/handles/mysql');
const makeOrderby = require('./orderby');
const makeLimit = require('./limit');



module.exports = async (reqQuery) => {
    try {
        if (reqQuery.productId && !isNaN(+reqQuery.productId)) {
            return {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: await handleMysql(`SELECT * FROM products WHERE id = ${+reqQuery.productId}`),
                    message: "Success"
                })
            };
        }


        let apiResult = null;



        if (reqQuery.filter) {
            const filters = reqQuery.filter.split(',');

            for (let i = 0; i < filters.length; i++) {
                const filterResult = await handleMysql(`SELECT id FROM prodscharacts WHERE label = '${filters[i]}'`);

                if (!apiResult) {
                    apiResult = await handleMysql(`
                        SELECT
                            p.id, p.name, p.price,
                            p.qtdStock, p.categoryId,
                            p.imagePath, p.isActive
                        FROM products as p
                        INNER JOIN prods_prodscharacts as pcs
                        ON pcs.prodcharactId = ${filterResult[0].id} AND p.id = pcs.productdId
                        ${makeLimit(reqQuery.start, reqQuery.end)}
                    `);
                }
                else {
                    const products = (await handleMysql(`
                        SELECT
                            p.id
                        FROM products as p
                        INNER JOIN prods_prodscharacts as pcs
                        ON pcs.prodcharactId = ${filterResult[0].id} AND p.id = pcs.productdId
                    `)).map(product => product.id);

                    apiResult = apiResult.filter(product => products.indexOf(product.id) !== -1);
                }
            }
        }


        if (reqQuery.categoryId && !isNaN(+reqQuery.categoryId)) {
            if (apiResult) {
                apiResult = apiResult.filter(product => product.categoryId === +reqQuery.categoryId);
            }
            else {
                apiResult = await handleMysql(`SELECT * FROM products WHERE categoryId = ${+reqQuery.categoryId} ${makeLimit(reqQuery.start, reqQuery.end)}`)
            }
        }


        if (reqQuery.orderby) {
            const orderbySplit = reqQuery.orderby.split(':');
            const field = orderbySplit[0];
            const order = orderbySplit[1].toUpperCase();

            makeOrderby(`${field}${order}`, apiResult);
        }


        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: apiResult,
                message: "Success"
            })
        };
    }
    catch (error) {
        console.log('[ERROR] - Error in get /api/products');
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