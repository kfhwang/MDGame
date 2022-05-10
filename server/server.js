var express = require("express");
var server = express();
 
var bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({limit:"2mb"}));
server.use(bodyParser.json({limit:"2mb"}));

server.use(express.static(__dirname+'/public'));
 
server.get("/", function(req, res){
    res.send("Hello, world!");
})

server.get("/message", function(req, res){
    console.log(req.query);
    res.send("Hello "+ req.query.fname+" "+req.query.lname);
})

server.post("/message", function(req, res){
    console.log(req.body);
    res.send("Hello "+ req.body.fname+" "+req.body.lname);
});


server.get("*", function(req, res){
    res.send("Page not found", 404);
})

server.listen(80);


