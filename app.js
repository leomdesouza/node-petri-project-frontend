'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config.js');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));

app.get('*', function(req, res){
    res.sendFile(__dirname + '/src/app/views/index.html');
});

app.listen(config.port, function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Listening on port " + config.port);
    }
});