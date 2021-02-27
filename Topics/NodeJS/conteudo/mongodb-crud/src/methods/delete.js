const { ObjectId } = require('mongodb');
const mongodb = require('../repositories/mongodb');



function executeDelete(connection, deleteExpression) {
    return new Promise(function(resolve, reject) {
        connection.collection('collection1').deleteOne(deleteExpression, function(error, docs) {
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

async function deleteOne() {
    const conn = await mongodb.createConnection();

    if (conn === null) {
        throw new Error('Mongodb connection not created');
    }


    const id = '603a7550dc8d87489f326713';

    const data = await executeDelete(conn, {_id: new ObjectId(id)});

    console.log(data);
}



module.exports = {
    deleteOne
};
