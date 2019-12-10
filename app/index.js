//imports express et dependance cors pour le pb du cross origin
var express = require("express");

var cors = require('cors')

var app = express();


//appel dependance pour gérer le problème cross origin
app.use(cors())


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

app.use("/img", express.static("img"));
app.use(express.static("public"));

var beerList = require("./beers/beers.json");
console.log("Beers", beerList);



// liste des différentes routes dans le BACK méthode GET
app.get("/", function(req, res) {
  console.log("Received request from", req.ip);
  res.send("Hello World!");
});

app.get("/beers", function(req, res) {
  console.log("Received request for beers from", req.ip);
  res.json(beerList);
});

app.get("/beer/:beerId", function(req, res) {
  console.log("Received request for " + req.param("beerId") + " from", req.ip);
  var beerDetails = require("./beers/" + req.param("beerId") + ".json");
  res.json(beerDetails);
});

app.use('/beers/img', express.static('beers/img'));      