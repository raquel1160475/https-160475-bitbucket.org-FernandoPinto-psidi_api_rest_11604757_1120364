'use strict';

exports.dadosColunaGraficoGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * index_coluna (BigDecimal)
  * tipo_grafico (String)
  * id_dados (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dadosGraficoGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * tipo_grafico (String)
  * id_dados (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dadosLinhaGraficoGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * index_linha (BigDecimal)
  * tipo_grafico (String)
  * id_dados (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

