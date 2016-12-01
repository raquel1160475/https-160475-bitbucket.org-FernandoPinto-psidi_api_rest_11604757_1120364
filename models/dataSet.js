
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	nlinha: {
		type: String
	},
	ncoluna: {
		type: String
	},
	elemento: {
		type: String
	},
	
});

var dataSet = module.exports = mongoose.model('DataSet', UserSchema);

module.exports.createDataSet = function(newDataSet, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newDataSet.password, salt, function(err, hash) {
	        newDataSet.password = hash;
	        newDataSet.save(callback);
	    });
	});
}