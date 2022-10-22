const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  hidden: Boolean,
  date: { type: Date, default: new Date() },
});

module.exports = mongoose.model('blogs', BlogSchema);
