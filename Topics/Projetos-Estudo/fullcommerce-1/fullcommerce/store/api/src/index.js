const express = require('express');

const {
    SERVER_PORT,
    SERVER_HOST
} = process.env;



const app = express();

require('./routes')(app);


const port = +SERVER_PORT;
const host = SERVER_HOST;
app.listen(port, host, () => console.log(`Server running at port ${port}`));