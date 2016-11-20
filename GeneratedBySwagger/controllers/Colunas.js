'use strict';

var url = require('url');


var Colunas = require('./ColunasService');


module.exports.dadosColunaGET = function dadosColunaGET (req, res, next) {
  Colunas.dadosColunaGET(req.swagger.params, res, next);
};

module.exports.dadosColunaPOST = function dadosColunaPOST (req, res, next) {
  Colunas.dadosColunaPOST(req.swagger.params, res, next);
};
