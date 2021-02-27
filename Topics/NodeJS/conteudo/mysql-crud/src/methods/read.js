const mysql = require('../repositories/mysql');



async function read() {
    try {
        const readResults = await mysql.executeQuery('SELECT * FROM `tabela` LIMIT 0,50');

        console.log(readResults);
    }
    catch (error) {
        console.log('Error in read');
        console.log(error);
    }
}



module.exports = {
    read
};
