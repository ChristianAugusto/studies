const mysql = require('mysql');



module.exports = (_query) => new Promise((resolve, reject) => {
    console.log(+process.env.MYSQL_PORT, typeof(+process.env.MYSQL_PORT));
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: +process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });

    connection.connect((err) => {
        if (err) {
            console.error(err);
            connection.end();
            reject(err);
        }

        console.log('[WARNING] - Connected to mysql');

        console.log(`[WARNING] - Executing query: ${_query}`);


        connection.query(_query, (error, results) => {
            if (error) {
                console.error(err);
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