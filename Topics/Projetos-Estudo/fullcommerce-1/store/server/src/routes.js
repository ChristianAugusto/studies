const path = require('path');

const getCategoryPage = require('./endpoints/getCategoryPage');



module.exports = function(app) {

    app.get('/', async (req, res) => {
        res.status(200);
        res.setHeader('Content-Type', 'text/html');
        res.sendFile(path.join(__dirname, 'public/views/burgerking-home.html'));
        res.end();
    });
    
    app.get('/loja/:categorySlug', async (req, res) => {
        res.status(200);
        res.setHeader('Content-Type', 'text/html');
        res.send(await getCategoryPage(req.params));
        res.end();
    });

};