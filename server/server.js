var express = require("express");
var server = express();

server.use(express.static(__dirname+'/public'));


server.get("/", function(req, res){
    res.send("Hello, world!");
})

server.get("/message", function(req, res){
    console.log(req.query);
    res.send("Hello "+ req.query.fname+" "+req.query.lname);
})


server.get("*", function(req, res){
    res.send("Page not found", 404);
})

server.listen(8080);


