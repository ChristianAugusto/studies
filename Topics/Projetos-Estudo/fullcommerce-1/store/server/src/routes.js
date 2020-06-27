const path = require('path');



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


function writeResponse(_respObj, res) {
    if (_respObj.status) {
        res.status(_respObj.status);
    }
    else {
        res.status(500);
    }

    if (_respObj.headers) {
        Object.entries(_respObj.headers).forEach(([name, value]) => res.setHeader(name, value));
    }
    else {
        res.setHeader('Content-Type', 'text/html')
    }

    if (_respObj.body && typeof(_respObj.body) === 'string') {
        res.send(_respObj.body);
    }
    else {
        res.send('');
    }
}