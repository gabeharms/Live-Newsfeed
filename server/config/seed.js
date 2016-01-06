/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Post from '../api/post/post.model';
import User from '../api/user/user.model';
var bcrypt = require('bcrypt');


User.find({}).removeAsync()
  .then(() => {
    bcrypt.hash('soccer', 10, function(err, hash) {
      User.create({
        username: 'Gabe',
        password: hash
      }, {
        username: 'Molly',
        password: hash
      }, function(users) {
        User.findAsync({}).then(function(users) {
          Post.find({}).removeAsync()
            .then(() => {
              Post.create({
                user: users[0],
                body: 'This is body #1'
              }, {
                user: users[0],
                body: 'This is body #2'
              }, {
                user: users[0],
                body: 'This is body #3'
              }, {
                user: users[1],
                body: 'This is body #4'
              }, {
                user: users[1],
                body: 'This is body #5'
              });
            });
        });
      });
    });
  });