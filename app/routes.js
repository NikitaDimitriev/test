module.exports = function (app) {
	var express 	= require('express');
	var http 		= require('http');
	var Items       = require('./models/Items');

	app.post('/api/items', function(req, res, next){
		Items.remove({},
			function (err, Items) {
				if (err) console.log(err); 
				return ;
	  });
		Items.create({ 
				a1: req.body.a1, 
				a2: req.body.a2, 
				a3: req.body.a3, 
				b1: req.body.b1,
				b2: req.body.b2,
				b3: req.body.b3,
				x: req.body.x,
				y: req.body.y,
				result: req.body.result
			}, 
				function (err, Items) {
			  if (err) console.log(err); 
			  res.json(Items);
		});
	});


	app.get('/api/getItems', function(req, res){
		Items.find(function(err, items){
			if(err) console.log('error:', err);
			res.json(items);
		});
	});


	app.get('*', function (req, res) {
		res.sendfile('./public/index.html');
	});

};