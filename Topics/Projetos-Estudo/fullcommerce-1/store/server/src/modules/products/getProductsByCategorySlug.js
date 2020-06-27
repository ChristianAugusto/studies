const handleMysql = require('../../handles/mysql');



module.exports = async (_categorySlug, _startIndex=0, _lastIndex=20) => {
    try {
        const getProductsQuery = 'SELECT id,name,price,qtd_stock,image_path FROM products WHERE category_id = ';
        const getCategoryIdQuery = `SELECT id FROM categories WHERE slug = '${_categorySlug}'`;
        const limit = `LIMIT ${_startIndex},${_lastIndex}`;
        const query = `${getProductsQuery}(${getCategoryIdQuery})${limit}`;

        return await handleMysql(query);
    }
    catch (error) {
        return;
    }
};