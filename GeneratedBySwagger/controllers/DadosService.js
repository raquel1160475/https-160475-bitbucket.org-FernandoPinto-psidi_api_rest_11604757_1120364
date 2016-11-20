'use strict';

exports.dadosDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_dados (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.dadosGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_dados (String)
  * id_utilizador (String)
  * n_colunas (BigDecimal)
  * n_linhas (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "colunas" : [ {
    "id_dados" : "aeiou",
    "tamanho" : 1.3579000000000001069366817318950779736042022705078125,
    "soma" : 1.3579000000000001069366817318950779736042022705078125,
    "valores" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  } ],
  "id_dados" : "aeiou",
  "tamanho_linha" : 1.3579000000000001069366817318950779736042022705078125,
  "tamanho_coluna" : 1.3579000000000001069366817318950779736042022705078125,
  "linhas" : [ {
    "id_dados" : "aeiou",
    "tamanho" : 1.3579000000000001069366817318950779736042022705078125,
    "soma" : 1.3579000000000001069366817318950779736042022705078125,
    "valores" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  } ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dadosPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_dados (String)
  * id_utilizador (String)
  * n_colunas (BigDecimal)
  * n_linhas (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = 1.3579000000000001069366817318950779736042022705078125;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

