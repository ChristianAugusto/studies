import 'regenerator-runtime';

import writeResponse from '@Modules/write-response';
import mysql from '@Modules/handles/mysql';
import logger from '@Utils/logger';



async function get(req) {
    try {
        const reqQuery = req.query;
        let data = null;


        if (reqQuery.productId && !isNaN(+reqQuery.productId)) {
            data = await mysql(`SELECT * FROM products WHERE id = ${reqQuery.productId}`);
        }
        else {
            
        }


        return {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data,
                message: 'Success'
            })
        };
    }
    catch (error) {
        logger.error('Error in GET products');
        logger.info(error);

        return {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: null,
                message: 'Internal server error'
            })
        };
    }
}

export default async function(req, res) {
    if (req.method == 'GET') {
        writeResponse(await get(req), res);
    }
};