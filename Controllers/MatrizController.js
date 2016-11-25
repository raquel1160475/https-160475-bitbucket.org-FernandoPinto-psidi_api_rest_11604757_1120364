var fs = require("fs");
var bodyParser = require('body-parser');

var filename = "matrixes.json";
var matrix = {};

module.exports = {	

	getMatrizes: function(res) {
		fs.readFile( __dirname + "/../" + filename, 'utf8', function (err, data) {
       		console.log( data );
       		res.json( JSON.parse(data));
   		});
	},

	getMatriz: function(res, id){
		
		var matrixFound = false;

		//console.log("Users available : " + JSON.stringify(users));
		fs.readFile( __dirname + "/../" + filename, 'utf8', function (err, data) {
	       	matrixes = JSON.parse( data );  
			for (var i = matrixes.length - 1; i >= 0; i--) {
			  //console.log(users[i]);
			  if (matrixes[i].id == id){
			    //console.log(users[i].id);
			    res.json(matrixes[i]);
			    matrixFound = true;
			  } 
			};

			if(!matrixFound){
			  res.json({text: 'The matrix does not exist.'});
			}
		});
	},

	putMatriz: function(res, newUser){
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
			    res.json({text: 'User created.'});
			}); 
	   });
	},

	postMatriz: function(res, editedUser){
	  fs.readFile( __dirname + "/../" + filename, 'utf8', function (err, data) {
	       	users = JSON.parse( data );
	       	var userFound = false;
	  		var index = editedUser.id;

	       	for (var i = users.length - 1; i >= 0; i--) {
				if(users[i].id = index){
			      users[i] = editedUser;
			      userFound = true;
			    } 
			};

			fs.writeFile( __dirname + "/../" + filename, JSON.stringify(users), function(err) {
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