var fs = require("fs");
var bodyParser = require('body-parser');

var filename = "users.json";
var user = {};

module.exports = {	

	getUtilizadores: function(res) {
		fs.readFile( __dirname + "/../" + filename, 'utf8', function (err, data) {
       		res.format({
       			'json': function(){
       				res.send( JSON.parse(data));
       			},
       			'html': function(){
       				res.send("<h1>Every user</h1><br>"+ data );
       			},
       			'default': function(){
       				res.status(406).send('Not Acceptable.');
       			}
       		});
   		});
	},

	getUtilizador: function(res, id){
		
		var userFound = false;

		fs.readFile( __dirname + "/../" + filename, 'utf8', function (err, data) {
	       	users = JSON.parse( data );
	       	var user;  
			for (var i = users.length - 1; i >= 0; i--) {
			  if (users[i].id == id){
			    user = users[i];
			    userFound = true;
			  } 
			};

			if(!userFound){
			  	res.format({
	       			'json': function(){
	       				res.send({text: 'The user does not exist.'});
	       			},
	       			'html': function(){
	       				res.send('The user does not exist.');
	       			},
	       			'default': function(){
	       				res.status(406).send('Not Acceptable.');
	       			}
       			});
			} else {
				res.format({
	       			'json': function(){
	       				res.send(user);
	       			},
	       			'html': function(){
	       				res.send(user);
	       			},
	       			'default': function(){
	       				res.status(406).send('Not Acceptable.');
	       			}
       			});
			}
		});
	},

	putUtilizador: function(res, newUser){
	  fs.readFile( __dirname + "/../" + filename, 'utf8', function (err, data) {
	       	users = JSON.parse( data );

	       	var maxID = 0;
	       	for (var i = users.length - 1; i >= 0; i--) {
	       		if(users[i].id > maxID){
	       			maxID = users[i].id;
	       		}
	       	}
	       	maxID++;

			newUser.id = maxID;
			users.push(newUser);

			fs.writeFile( __dirname + "/../" + filename, JSON.stringify(users), function(err) {
				if(err) {
			    	return console.log(err);
			  	}
			    //console.log("User was created!");
			    res.format({
	       			'json': function(){
	       				res.send({text: 'User created.'});
	       			},
	       			'html': function(){
	       				res.send('User created.');
	       			},
	       			'default': function(){
	       				res.status(406).send('Not Acceptable.');
	       			}
       			});
			}); 
	   });
	},

	postUtilizador: function(res, req){
	  fs.readFile( __dirname + "/../" + filename, 'utf8', function (err, data) {
	       	users = JSON.parse( data );
	       	var editedUser = req.body;
	       	editedUser.id = req.params.id;
	       	//var editedUser.name = req.body.name;
	       	//var editedUser.password = req.body.password;
	       	var userFound = false;
	  		var index = editedUser.id;

	       	for (var i = users.length - 1; i >= 0; i--) {
				if(users[i].id == index){
			      users[i] = editedUser;
			      userFound = true;
			    } 
			};

		  	if(!userFound){
		    	res.format({
	       			'json': function(){
	       				res.send({text: 'The user does not exist.'});
	       			},
	       			'html': function(){
	       				res.send('The user does not exist.');
	       			},
	       			'default': function(){
	       				res.status(406).send('Not Acceptable.');
	       			}
       			});
		  	} else {
		 	 	fs.writeFile( __dirname + "/../" + filename, JSON.stringify(users), function(err) {
					if(err) {
				    	return console.log(err);
				  	}

				  	res.format({
		       			'json': function(){
		       				res.send({text: 'User created.'});
		       			},
		       			'html': function(){
		       				res.send('User created.');
		       			},
		       			'default': function(){
		       				res.status(406).send('Not Acceptable.');
		       			}
       				});
				});
		 	}
	   });
	}
}

	

