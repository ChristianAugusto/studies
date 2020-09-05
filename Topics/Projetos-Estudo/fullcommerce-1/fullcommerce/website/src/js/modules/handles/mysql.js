const mysql = require('mysql');

const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env;



module.exports = (_query) => new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
        host: MYSQL_HOST,
        port: +MYSQL_PORT,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE
    });

    connection.connect((err) => {
        if (err) {
            console.log(err);
            connection.end();
            reject(err);
        }

        console.log('[WARNING] - Connected to mysql');

        console.log(`[WARNING] - Executing query: ${_query}`);


        connection.query(_query, (error, results) => {
            if (error) {
                console.log(err);
                connection.end();
                reject(err);
            }
            console.log('[WARNING] - Query executed with success');

            console.log('[WARNING] - Closing connection');
            connection.end();
            console.log('[WARNING] - Connection closed');

            console.log(`[WARNING] - Results: ${JSON.stringify(results)}`);
            resolve(results);
        });
    });
});