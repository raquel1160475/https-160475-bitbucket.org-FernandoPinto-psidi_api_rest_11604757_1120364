//REQUIRES 
var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
//var methodOverride = require('method-override');

var app = express();

var utilizadorController = require('./Controllers/UtilizadorController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(methodOverride());

// logging : DEBUG
//app.use(express.logger('dev'));

/////////////////////////////
// DATA



/////////////////////////////
// MAIN ROUTING

app.get('/utilizadores', function(req, res) {
	utilizadorController.getUtilizadores(res);
});

// GET UTILIZADOR
app.get('/utilizador', function(req, res) {
  	utilizadorController.getUtilizador(res, req.headers.id);
});

// PUT
app.put("/utilizador", function(req, res) {
  	utilizadorController.putUtilizador(res, req.body);
});

// POST
app.post("/utilizador", function(req, res) {
  	utilizadorController.postUtilizador(res, req.body);
});



/////////////////////////////
// STARTING ...

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});