var express =  require("express");
var app = express();
var cors = require('cors');

app.set('views', './Views')
app.set("view engine", "pug");

app.use(cors());

app.get('/', function(req, res){
    res.render("index");
});
app.get('/tecnologia', function(req, res){
    res.send("<p>Computadores</p>");
});

app.listen(3000, function(){
    console.log("Servido no Ar");
});