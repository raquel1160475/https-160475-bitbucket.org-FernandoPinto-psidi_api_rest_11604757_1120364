'use strict';

exports.dadosColunaGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * index_coluna (BigDecimal)
  * id_dados (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "id_dados" : "aeiou",
  "tamanho" : 1.3579000000000001069366817318950779736042022705078125,
  "soma" : 1.3579000000000001069366817318950779736042022705078125,
  "valores" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.dadosColunaPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  res.end();
}

