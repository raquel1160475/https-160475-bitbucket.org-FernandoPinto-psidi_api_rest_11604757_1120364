'use strict';

var url = require('url');


var Utilizadores = require('./UtilizadoresService');


module.exports.utilizadoresGET = function utilizadoresGET (req, res, next) {
  Utilizadores.utilizadoresGET(req.swagger.params, res, next);
};

module.exports.utilizadoresPOST = function utilizadoresPOST (req, res, next) {
  Utilizadores.utilizadoresPOST(req.swagger.params, res, next);
};
