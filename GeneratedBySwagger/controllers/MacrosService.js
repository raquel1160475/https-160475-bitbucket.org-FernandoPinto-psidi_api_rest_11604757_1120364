'use strict';

exports.macrosAdicionarOperacaoPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_macro (String)
  * operacao_valor (String)
  * operacao_target (String)
  * operacao_op (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "vector" : [ 1.3579000000000001069366817318950779736042022705078125 ],
  "id_macro" : "aeiou",
  "operacoes" : [ {
    "op" : "aeiou",
    "valor" : 1.3579000000000001069366817318950779736042022705078125,
    "target" : "aeiou"
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

exports.macrosAdicionarVectorPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_macro (String)
  * vector (List)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "vector" : [ 1.3579000000000001069366817318950779736042022705078125 ],
  "id_macro" : "aeiou",
  "operacoes" : [ {
    "op" : "aeiou",
    "valor" : 1.3579000000000001069366817318950779736042022705078125,
    "target" : "aeiou"
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

exports.macrosDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_macro (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.macrosExecutarMacroPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_macro (String)
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

exports.macrosGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_macro (String)
  * id_utilizador (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "vector" : [ 1.3579000000000001069366817318950779736042022705078125 ],
  "id_macro" : "aeiou",
  "operacoes" : [ {
    "op" : "aeiou",
    "valor" : 1.3579000000000001069366817318950779736042022705078125,
    "target" : "aeiou"
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

exports.macrosMedidasEstatisticasPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_dados (String)
  * tipo_estatistica (String)
  * id_linha (String)
  * id_coluna (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "vector" : [ 1.3579000000000001069366817318950779736042022705078125 ],
  "id_macro" : "aeiou",
  "operacoes" : [ {
    "op" : "aeiou",
    "valor" : 1.3579000000000001069366817318950779736042022705078125,
    "target" : "aeiou"
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

exports.macrosPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_utilizador (String)
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

