'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PostSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body: String,
  date: {type: Date, required: true, default: Date.now}
});

export default mongoose.model('Post', PostSchema);
