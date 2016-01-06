/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /api/session              ->  create
 */

'use strict';

import _ from 'lodash';
import config from '../../config/environment';
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt');
var User = require('../user/user.model');


var secretKey = config.secrets.session;


function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


// Creates a new Post in the DB
export function create(req, res) {
  User.findOne({username: req.body.username})
    .select('password')
    .exec(function(err, user) {
      if (err) { return res.send(500); }
      if (!user) { return res.send(401); }
      bcrypt.compare(req.body.password, user.password, function(err, valid) {
        if (err) { return res.send(500); }
        if (!valid) { return res.send(401); }
        var token = jwt.encode({username: req.body.username}, secretKey);
        res.json(token);
      });
  });
}
