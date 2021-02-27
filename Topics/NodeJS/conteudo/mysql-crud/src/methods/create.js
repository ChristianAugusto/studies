const mysql = require('../repositories/mysql');



async function create() {
    try {
        const createResults = await mysql.executeQuery('INSERT INTO `tabela` (`name`) VALUES (\'1\')');

        console.log(createResults);
    }
    catch (error) {
        console.log('Error in create');
        console.log(error);
    }
}



module.exports = {
    create
};
