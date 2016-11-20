'use strict';

var url = require('url');


var Macros = require('./MacrosService');


module.exports.macrosAdicionarOperacaoPOST = function macrosAdicionarOperacaoPOST (req, res, next) {
  Macros.macrosAdicionarOperacaoPOST(req.swagger.params, res, next);
};

module.exports.macrosAdicionarVectorPOST = function macrosAdicionarVectorPOST (req, res, next) {
  Macros.macrosAdicionarVectorPOST(req.swagger.params, res, next);
};

module.exports.macrosDELETE = function macrosDELETE (req, res, next) {
  Macros.macrosDELETE(req.swagger.params, res, next);
};

module.exports.macrosExecutarMacroPOST = function macrosExecutarMacroPOST (req, res, next) {
  Macros.macrosExecutarMacroPOST(req.swagger.params, res, next);
};

module.exports.macrosGET = function macrosGET (req, res, next) {
  Macros.macrosGET(req.swagger.params, res, next);
};

module.exports.macrosMedidasEstatisticasPOST = function macrosMedidasEstatisticasPOST (req, res, next) {
  Macros.macrosMedidasEstatisticasPOST(req.swagger.params, res, next);
};

module.exports.macrosPOST = function macrosPOST (req, res, next) {
  Macros.macrosPOST(req.swagger.params, res, next);
};
