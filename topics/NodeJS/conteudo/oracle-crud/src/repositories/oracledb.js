const oracledb = require('oracledb');



async function getConnection() {
    let connection = null;

    try {
        connection = await oracledb.getConnection({
            user: 'christian',
            password: 'marte123',
            connectString: 'localhost/yourorclpdb'
        });

        return connection;
    } catch (err) {
        console.log('Error in oracledb.getConnection');
        console.log(err);
        return null;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } 
            catch (err) {
                console.log('Error in oracledb.getConnection close');
                console.log(err);
                return null;
            }
        }
    }
}



module.exports = {
    getConnection
};