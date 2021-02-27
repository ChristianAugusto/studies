const mongodb = require('../repositories/mongodb');



function executeCreate(connection, values) {
    return new Promise(function(resolve, reject) {
        connection.collection('collection1').insertMany(values, function(error, result) {
            if (error) {
                console.log(error);
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
}

async function create() {
    const conn = await mongodb.createConnection();

    if (conn === null) {
        throw new Error('Mongodb connection not created');
    }



    const values = [{
        a: 'a'
    },
    {
        b: 'b'
    },
    {
        'c': 'c'
    }];

    const result = await executeCreate(conn, values);

    console.log(result);

    if (result.insertedCount != values.length) {
        console.log('Error in insert one or more values');
    }
}



module.exports = {
    create
};
