'use strict';

var mongoose = require('mongoose');

var user = process.env.DBUSER || '';
var pword = process.env.DBPASSWORD || '';
var domain = process.env.DBDOMAIN || '127.0.0.1';
var port = process.env.DBPORT || '';
var database = process.env.DBDATABASE || 'aueras';
mongoose.connect('mongodb://' + user + ':' + pword + '@' + domain + ':' + port + '/' + database);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MONGOD HAS AWAKENED');
});

var emailSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

exports.Email = mongoose.model('Email', emailSchema);
