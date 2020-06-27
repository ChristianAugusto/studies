const express = require('express');
const path = require('path');



const app = express();

app.use(express.static(path.join(__dirname, 'public/static')));

require('./routes')(app);


// const port = process.env.SERVER_PORT || 3000;
const port = 3000;
app.listen(port, () => console.log(`Server running at port ${port}`));