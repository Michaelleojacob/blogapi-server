const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  hidden: Boolean,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('blogs', BlogSchema);
