//REQUIRES 
var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(methodOverride());

// logging : DEBUG
//app.use(express.logger('dev'));

/////////////////////////////
// DATA

var users = [];
var user = {};
var matrix = {};

/////////////////////////////
// MAIN ROUTING

app.get('/utilizadores', function(req, res) {
  //res.contentType('json');
  //res.send(JSON.stringify({ text: messageText, changed: !original }));

  res.json(users);
});

// GET UTILIZADOR
app.get('/utilizador', function(req, res) {
  //res.contentType('json');
  //res.send(JSON.stringify({ text: messageText, changed: !original }));
  var index = req.headers.id;
  var userFound = false;

  //console.log("Users available : " + JSON.stringify(users));
  
  for (var i = users.length - 1; i >= 0; i--) {
    //console.log(users[i]);
    if (users[i].id == index){
      console.log(users[i].id);
      res.json(users[i]);
      userFound = true;
    } 
  };

  if(!userFound){
    res.json({text: 'The user does not exist.'});
  }

  //console.log("message text requested. text sent was:" + messageText);
});

// PUT
app.put("/utilizador", function(req, res) {
  //console.log(req.body);

  var newUser = req.body; //JSON.parse(req.body);

  //users[users.length] = newUser;
  users.push(newUser);

  //res.contentType('json');
  //res.send(JSON.stringify({ text: messageText, changed: !original }));
  res.json(newUser);

  //console.log("New user was add: " + JSON.stringify(newUser));
});

// POST
app.post("/utilizador", function(req, res) {
  var userFound = false;  
  var editedUser = req.body;
  var index = editedUser.id;

  for (var i = users.length - 1; i >= 0; i--) {
    if(users[i].id = index){
      users[i] = editedUser;
      res.json(editedUser);
      userFound = true;
    } 
  };

  if(!userFound){
    res.json({text: 'The user does not exist.'});
  }

});


/////////////////////////////
// STARTING ...

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on " + port);
});