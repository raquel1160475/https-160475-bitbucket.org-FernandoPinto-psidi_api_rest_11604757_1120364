'use strict';

var url = require('url');


var Linhas = require('./LinhasService');


module.exports.dadosLinhaGET = function dadosLinhaGET (req, res, next) {
  Linhas.dadosLinhaGET(req.swagger.params, res, next);
};
