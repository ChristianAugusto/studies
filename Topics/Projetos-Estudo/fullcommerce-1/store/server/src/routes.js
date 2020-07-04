const path = require('path');

const writeResponse = require('./modules/writeResponse');



module.exports = function(app) {

    /* Page(s) */

    app.get('/', async (req, res) => {
        writeResponse(await require('./endpoints/pages/getHomePage')(), res);
    });

    app.get('/loja/:categorySlug', async (req, res) => {
        writeResponse(await require('./endpoints/pages/getCategoryPage')(req.params), res);
    });



    /* API(s) */

    app.get('/api/products', async (req, res) => {
        writeResponse(await require('./endpoints/api/products/get')(req.query), res);
    })
};