var express = require("express");
var server = express();

var fs = require("fs");
var https = require("https");

var pkey = fs.readFileSync(__dirname+'/privkey.pem');
var hcert = fs.readFileSync(__dirname+'/fullchain.pem');


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

var SSL = https.createServer({
    key: pkey,
    cert: hcert
}, server)

SSL.listen(443, function(){
    console.log("HTTPS running on port no: 443");
})

server.listen(80, function(){
    console.log("HTTP running on port no: 80")
});


