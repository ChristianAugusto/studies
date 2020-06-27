const path = require('path');
const fs = require('fs');

const getProductsByCategorySlug = require('../modules/products/getProductsByCategorySlug');



module.exports = async (reqParams) => {
    let $return = null;

    try {
        const pageHtml = fs.readFileSync(path.join(__dirname, '..', 'public/views/burgerking-category.html'), 'utf-8');
        console.log(pageHtml);

        $return = JSON.stringify(await getProductsByCategorySlug(reqParams.categorySlug));
    } catch (error) {
        console.error(error);
        $return = JSON.stringify({
            data: null
        });
    }

    console.log(`[WARNING] - Return getCategoryPage ${$return}`);

    return $return;
};