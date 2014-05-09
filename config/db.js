'use strict';

var mongoose = require('mongoose');

var mongoURL = process.env.MONGOHQ_URL || 'mongodb://:@127.0.0.1:/aueras';

mongoose.connect(mongoURL);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MONGOD HAS AWAKENED');
});

var emailSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

exports.Email = mongoose.model('Email', emailSchema);
