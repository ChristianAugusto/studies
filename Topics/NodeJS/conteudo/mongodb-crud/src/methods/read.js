const mongodb = require('../repositories/mongodb');



function executeFind(connection, findExpression) {
    return new Promise(function(resolve, reject) {
        connection.collection('collection1').find(findExpression)
        .toArray(function(error, docs) {
            if (error) {
                console.log(error);
                reject(error);
            }
            else {
                resolve(docs);
            }
        });
    });
}

async function findAll() {
    const conn = await mongodb.createConnection();

    if (conn === null) {
        throw new Error('Mongodb connection not created');
    }

    const data = await executeFind(conn, {});

    console.log(data);
}



module.exports = {
    findAll
};
