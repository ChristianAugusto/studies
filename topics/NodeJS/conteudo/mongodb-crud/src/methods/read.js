const { ObjectId } = require('mongodb');
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

    const data = await executeFind(conn.db('test'), {});

    console.log(data);

    conn.close();
}

async function findOne() {
    const conn = await mongodb.createConnection();

    if (conn === null) {
        throw new Error('Mongodb connection not created');
    }


    const id = '603a7550dc8d87489f326713';

    const data = await executeFind(conn.db('test'), {_id: new ObjectId(id)});

    console.log(data);

    conn.close();
}



module.exports = {
    findAll,
    findOne
};
