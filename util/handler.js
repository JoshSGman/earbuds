'use strict';

var db  = require('../config/db.js');

module.exports.saveEmail = function(req, res){

  var email = new db.Email({
    email: req.body.email
  });

  email.save(function(err) {
    if (err) { console.error('There was an error:', err); }
  });

  res.send(200);
};
