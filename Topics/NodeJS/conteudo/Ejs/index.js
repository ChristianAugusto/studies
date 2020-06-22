var express =  require("express");
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render("views/home/index");
});
app.get('/admin', function(req, res){
    res.render("views/admin/form_add_noticia");
});

app.listen(3000, function(){
    console.log("Servido no Ar");
});