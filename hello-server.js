//REQUIRES 
var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
//var methodOverride = require('method-override');

var app = express();

var utilizadorController = require('./Controllers/UtilizadorController');
var matrizController = require('./Controllers/MatrizController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(methodOverride());

// logging : DEBUG
//app.use(express.logger('dev'));

/////////////////////////////
// DATA



/////////////////////////////
// MAIN ROUTING

// ROUTING UTILIZADORES
app.get('/utilizadores', function(req, res) {
	utilizadorController.getUtilizadores(res);
});

app.get('/utilizadores/:id', function(req, res) {
  	utilizadorController.getUtilizador(res, req.params.id);
});

app.put("/utilizadores", function(req, res) {
  	utilizadorController.putUtilizador(res, req.body);
});

app.post("/utilizadores/:id", function(req, res) {
  	utilizadorController.postUtilizador(res, req);
});

// ROUTING MATRIZES

app.get('/matrizes', function(req, res) {
	matrizController.getMatrizes(res);
});

app.get('/matrizes/:id', function(req, res) {
  	matrizController.getMatriz(res, req.params.id);
});

app.put("/matrizes/", function(req, res) {
  	matrizController.putMatriz(res, req.body);
});

app.post("/matrizes/:id", function(req, res) {
  	matrizController.postMatriz(res, req);
});



/////////////////////////////
// STARTING ...

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});