var express =  require("express");
var app = express();

app.get('/', function(req, res){
    res.send("<p>Home</p>");
});
app.get('/tecnologia', function(req, res){
    res.send("<p>Computadores</p>");
});

app.listen(3000, function(){
    console.log("Servido no Ar");
});