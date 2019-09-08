var http = require("http");

var retorno = http.createServer(function(req, res){

    var categoria = req.url;

    if (categoria == "/tecnologia"){
        res.end("<p>Computadores</p>");
        console.log(req.url);
    } else if(categoria == "/musicas"){
        res.end("<p>Eletrônica</p>");
        console.log(req.url);
    } else {
        res.end("<p>Requisição feita com sucesso</p>");
        console.log(req.url);
    }

});

retorno.listen(3000);