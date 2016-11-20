'use strict';

var url = require('url');


var Utilizador = require('./UtilizadorService');


module.exports.meGET = function meGET (req, res, next) {
  Utilizador.meGET(req.swagger.params, res, next);
};
