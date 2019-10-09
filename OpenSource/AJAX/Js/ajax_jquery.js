//Get
var url = "url + params";

$.get(url, function(data){
    console.log(data);
});



//Post
var user = "teste";
var password = "1234";
var data_json = `{"user": "${user}", "password": "${password}"}`;

var url = "url + params";
$.post(url, data_json);