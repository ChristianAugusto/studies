import mysql from 'mysql';

import logger from '@Utils/logger';



const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env;



export default (_query) => new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
        host: MYSQL_HOST,
        port: MYSQL_PORT,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE
    });

    connection.connect((err) => {
        if (err) {
            logger.error('Error in connect mysql');
            logger.info(err);

            connection.end();
            reject(err);

            return;
        }

        logger.warning('Connected to mysql');

        logger.warning(`Executing query: ${_query}`);


        connection.query(_query, (error, results) => {
            if (error) {
                console.log(err);
                connection.end();
                reject(err);
            }
            logger.warning('Query executed with success');

            logger.warning('Closing connection');
            connection.end();
            logger.warning('Connection closed');

            logger.warning(`Results: ${JSON.stringify(results)}`);
            resolve(results);
        });
    });
});