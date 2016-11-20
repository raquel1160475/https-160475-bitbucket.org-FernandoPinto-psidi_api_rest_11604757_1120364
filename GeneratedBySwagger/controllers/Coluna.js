'use strict';

var url = require('url');


var Coluna = require('./ColunaService');


module.exports.dadosColunaDELETE = function dadosColunaDELETE (req, res, next) {
  Coluna.dadosColunaDELETE(req.swagger.params, res, next);
};
