//Get
var ajax_get = new XMLHttpRequest();

var url = "url + params";

ajax_get.open("GET", url);
ajax_get.onreadystatechange = function(){
    if (ajax_get.status === 200 && ajax_get.readyState === 4){
        var data = ajax_get.response;
        console.log(data);
    }
}

ajax_get.send();

//or
/*

ajax_get.onload = function(){
    var data = JSON.parse(ajax_get.response);
    console.log(data);
}

*/


//Post
var user = "teste";
var password = "1234";
var data_json = `{"user": "${user}", "password": "${password}"}`;


var ajax_post = new XMLHttpRequest();

var url = "url + params";

ajax_post.open("POST", url);

ajax_post.setRequestHeader("Content-type", "application/json");

ajax_post.send(data_json);