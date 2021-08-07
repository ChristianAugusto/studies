const {
    ObjectId
} = require('mongodb');
const mongodb = require('../repositories/mongodb');



function executeUpdate(connection, id, obj) {
    return new Promise(function (resolve, reject) {
        connection.collection('collection1').updateOne({
            _id: new ObjectId(id)
        }, {
            $set: obj
        }, function (error, result) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

async function update() {
    const conn = await mongodb.createConnection();

    if (conn === null) {
        throw new Error('Mongodb connection not created');
    }



    const result = await executeUpdate(conn.db('test'), '603a7550dc8d87489f326713', {
        a: 'teste',
        d: 'd'
    });

    console.log(result);

    conn.close();
}



module.exports = {
    update
};