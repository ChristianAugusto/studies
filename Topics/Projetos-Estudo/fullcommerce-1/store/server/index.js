const express = require('express');
const path = require('path');



const app = express();

app.use(express.static('./src/public/static'));

require('./src/routes')(app);


const port = +process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;
app.listen(port, host, () => console.log(`Server running at port ${port}`));