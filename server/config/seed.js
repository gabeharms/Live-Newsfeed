/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Post from '../api/post/post.model';

Post.find({}).removeAsync()
  .then(() => {
    Post.create({
      username: 'Gabe Harms',
      body: 'This is body #1'
    }, {
      username: 'Gabe Harms',
      body: 'This is body #2'
    }, {
      username: 'Gabe Harms',
      body: 'This is body #3'
    }, {
      username: 'Gabe Harms',
      body: 'This is body #4'
    }, {
      username: 'Gabe Harms',
      body: 'This is body #5'
    });
  });

