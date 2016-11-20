'use strict';

var url = require('url');


var Graficos = require('./GraficosService');


module.exports.dadosColunaGraficoGET = function dadosColunaGraficoGET (req, res, next) {
  Graficos.dadosColunaGraficoGET(req.swagger.params, res, next);
};

module.exports.dadosGraficoGET = function dadosGraficoGET (req, res, next) {
  Graficos.dadosGraficoGET(req.swagger.params, res, next);
};

module.exports.dadosLinhaGraficoGET = function dadosLinhaGraficoGET (req, res, next) {
  Graficos.dadosLinhaGraficoGET(req.swagger.params, res, next);
};
