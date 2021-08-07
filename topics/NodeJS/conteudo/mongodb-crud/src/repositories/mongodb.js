const MongoClient = require('mongodb').MongoClient;



async function createConnection() {
    try {
        const mongodbUrl = 'mongodb://root:12345678@localhost:27017?authSource=admin&ssl=false';

        const conn = await MongoClient.connect(mongodbUrl, {
            useUnifiedTopology: true
        });

        return conn;
    } catch (error) {
        console.log(error);
        return null;
    }
}



module.exports = {
    createConnection
};