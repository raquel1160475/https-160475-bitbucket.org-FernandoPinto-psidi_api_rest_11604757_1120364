var fs = require("fs");
var bodyParser = require('body-parser');

var user = {};

module.exports = {	

	getUtilizadores: function(res) {
		fs.readFile( __dirname + "/../" + "users.json", 'utf8', function (err, data) {
       		console.log( data );
       		res.json( JSON.parse(data));
   		});
	},

	getUtilizador: function(res, id){
		
		var userFound = false;

		//console.log("Users available : " + JSON.stringify(users));
		fs.readFile( __dirname + "/../" + "users.json", 'utf8', function (err, data) {
	       	users = JSON.parse( data );  
			for (var i = users.length - 1; i >= 0; i--) {
			  //console.log(users[i]);
			  if (users[i].id == id){
			    //console.log(users[i].id);
			    res.json(users[i]);
			    userFound = true;
			  } 
			};

			if(!userFound){
			  res.json({text: 'The user does not exist.'});
			}
		});
	},

	putUtilizador: function(res, newUser){
	  fs.readFile( __dirname + "/../" + "users.json", 'utf8', function (err, data) {
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

			fs.writeFile( __dirname + "/../" + "users.json", JSON.stringify(users), function(err) {
				if(err) {
			    	return console.log(err);
			  	}
			    //console.log("User was created!");
			    res.json({text: 'User created.'});
			}); 
	   });
	},

	postUtilizador: function(res, editedUser){
	  fs.readFile( __dirname + "/../" + "users.json", 'utf8', function (err, data) {
	       	users = JSON.parse( data );
	       	var userFound = false;
	  		var index = editedUser.id;

	       	for (var i = users.length - 1; i >= 0; i--) {
				if(users[i].id = index){
			      users[i] = editedUser;
			      userFound = true;
			    } 
			};

			fs.writeFile( __dirname + "/../" + "users.json", JSON.stringify(users), function(err) {
				if(err) {
			    	return console.log(err);
			  	}
			    //console.log("User was created!");
			}); 
	   });

	  if(!userFound){
	    res.json({text: 'The user does not exist.'});
	  } else {
	  	res.json({text: 'User created.'});
	  }
	}

}

	

