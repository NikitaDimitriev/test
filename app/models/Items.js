var mongoose = require('mongoose');

module.exports = mongoose.model('Items', {
	a1 : {type : String, default: ''},
	a2 : {type : String, default: ''},
	a3 : {type : String, default: ''},
	b1 : {type : String, default: ''},
	b2 : {type : String, default: ''},
	b3 : {type : String, default: ''},
	x : {type : String, default: ''},
	y : {type : String, default: ''},
	result : {type : String, default: ''}
});
