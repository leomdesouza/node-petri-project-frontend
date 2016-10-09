'use strict';

var express = require('express');
var config = require('./config.js');

var app = express();

app.listen(config.port, function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Listening on port " + config.port);
    }
});