const express = require('express');
const path = require('path');



const app = express();

app.use(express.static(path.join(__dirname, 'public/static')));

require('./src/routes')(app);


const port = +process.env.SERVER_PORT;
const host = '0.0.0.0';
app.listen(port, host, () => console.log(`Server running at port ${port}`));