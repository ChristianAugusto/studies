const mysql = require('mysql');



module.exports = (_query) => new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "12345678",
        database: "burgerking"
    });

    connection.connect((err) => {
        if (err) {
            console.error(err);
            reject(err);
        }

        console.log('[WARNING] - Connected to mysql');

        console.log(`[WARNING] - Executing query: ${_query}`);


        connection.query(_query, (error, results) => {
            if (error) {
                console.error(err);
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