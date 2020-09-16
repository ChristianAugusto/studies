const JSEncrypt = require('node-jsencrypt');
const fs = require('fs');



const jsEncrypt = new JSEncrypt({default_key_size: 4096});


const publicKeyLocal = jsEncrypt.getPublicKey();
const privateKeyLocal = jsEncrypt.getPrivateKey();



fs.writeFileSync('./build/publickey.pem', publicKeyLocal);
fs.writeFileSync('./build/privatekey.pem', privateKeyLocal);