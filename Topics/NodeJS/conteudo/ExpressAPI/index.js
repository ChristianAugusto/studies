var express =  require("express");
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function(req, res){
    console.log('teste');
    const teste = {
        message : 'teste'
    }
    res.json(teste);
});
app.get('/tecnologia', function(req, res){
    res.send("<p>Computadores</p>");
});

app.listen(3000, function(){
    console.log("Servido no Ar");
});