const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'blogs' },
  title: String,
  body: String,
  date: { type: Date, default: new Date() },
});

module.exports = mongoose.model('comments', CommentSchema);
