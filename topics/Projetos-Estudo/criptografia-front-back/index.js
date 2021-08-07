const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const JSEncrypt = require('node-jsencrypt');



const app = express();
const PORT = process.env.PORT || 3000;
const jsonParser = bodyParser.json();
// const textParser = bodyParser.text();
const jsEncrypt = new JSEncrypt({default_key_size: 4096});


app.get('/', function(req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});

app.post('/', jsonParser, function(req, res) {
    console.log('req.body', req.body);

    const privateKey = fs.readFileSync(path.resolve('./keys/privatekey.pem'), 'utf8');

    jsEncrypt.setKey(privateKey);

    Object.entries(req.body).forEach(([key, value]) => req.body[key] = jsEncrypt.decrypt(value))

    res.send(JSON.stringify(req.body));
});


app.listen(PORT, () => console.log(`Server running at port ${PORT}`));