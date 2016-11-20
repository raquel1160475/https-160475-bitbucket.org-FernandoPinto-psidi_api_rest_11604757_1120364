'use strict';

var url = require('url');


var Linha = require('./LinhaService');


module.exports.dadosLinhaDELETE = function dadosLinhaDELETE (req, res, next) {
  Linha.dadosLinhaDELETE(req.swagger.params, res, next);
};
