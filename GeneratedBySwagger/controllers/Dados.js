'use strict';

var url = require('url');


var Dados = require('./DadosService');


module.exports.dadosDELETE = function dadosDELETE (req, res, next) {
  Dados.dadosDELETE(req.swagger.params, res, next);
};

module.exports.dadosGET = function dadosGET (req, res, next) {
  Dados.dadosGET(req.swagger.params, res, next);
};

module.exports.dadosPOST = function dadosPOST (req, res, next) {
  Dados.dadosPOST(req.swagger.params, res, next);
};
