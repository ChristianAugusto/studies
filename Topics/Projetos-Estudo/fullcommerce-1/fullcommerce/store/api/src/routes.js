const path = require('path');

const writeResponse = require('./modules/writeResponse');



module.exports = function(app) {
    /* API(s) */

    app.get('/api/products', async (req, res) => {
        writeResponse(await require('./endpoints/products/get')(req.query), res);
    })
};