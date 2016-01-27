var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var config = require('./config');
var app = express();
var port = config.port;

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./api/api')(app);

app.listen(port);
console.log("Started Node.js server. Listening on port " + config.port);