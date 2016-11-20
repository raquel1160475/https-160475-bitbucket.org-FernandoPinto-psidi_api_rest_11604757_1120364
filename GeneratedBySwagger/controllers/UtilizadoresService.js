'use strict';

exports.utilizadoresGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_utilizador (String)
  * nome (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "password" : "aeiou",
  "nome" : "aeiou",
  "id_utilizador" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.utilizadoresPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id_utilizador (String)
  * nome (String)
  * password (String)
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

