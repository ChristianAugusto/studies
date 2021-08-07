const mysql = require('mysql');



function executeQuery(_query) {
    return new Promise(function(resolve, reject) {
        const connection = mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '0123456789',
            database: 'test'
        });

        connection.connect((err) => {
            if (err) {
                console.log('Error in connect mysql');
                console.log(err);

                connection.end();
                reject(err);

                return;
            }

            console.log('Connected to mysql');

            console.log(`Executing query: ${_query}`);


            connection.query(_query, (err, results) => {
                if (err) {
                    console.log(err);
                    connection.end();
                    reject(err);
                    return;
                }
                console.log('Query executed with success');

                console.log('Closing connection');
                connection.end();
                console.log('Connection closed');

                console.log(`Results: ${JSON.stringify(results)}`);
                resolve(results);
            });
        });
    })
}



module.exports = {
    executeQuery
};
