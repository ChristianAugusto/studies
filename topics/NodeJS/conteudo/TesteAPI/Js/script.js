$.ajax({
    type : "GET",
    url : "http://localhost:3000/",
    success: function(data){
        document.getElementById('teste').textContent = data.message;
    }
});