module.exports = function (app) {
	var express = require('express');
	var http = require('http');


	app.get('*', function (req, res) {
		res.sendfile('./public/index.html');
	});

};