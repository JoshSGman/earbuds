'use strict';

/* global require, process */
var express = require('express');
var bodyParser = require('body-parser');
var handler = require('./util/handler.js');


var app = express();
var port = process.env.PORT || 9000;

app.use(bodyParser())
app.use(express.static(__dirname + '/app'));


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    if (req.method === 'OPTIONS') res.send(200);
    else next();
});

app.post('/landing/email', handler.saveEmail);

app.listen(port);
console.log('Listening on ' + port);