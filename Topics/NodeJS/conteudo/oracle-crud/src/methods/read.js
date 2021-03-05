const oracledb = require('../repositories/oracledb');



async function read() {
    try {
        const connection = await oracledb.getConnection();

        if (connection === null) {
            throw new Error('oracledb connection not created');
        }

        const result = await connection.execute('select * from test_table');

        console.log(result.metaData);
        console.log(result.rows);
    }
    catch (error) {
        console.log('Error in read');
        console.log(error);
    }
}



module.exports = {
    read
};
