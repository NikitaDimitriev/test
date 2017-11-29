// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');



var port = process.env.PORT || 8088; // set our port

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 


require('./app/routes')(app);
// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port);
module.exports = app;