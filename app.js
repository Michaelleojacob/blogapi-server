const express = require('express');
const mongoose = require('mongoose');
const BlogSchema = require('./models/blogs.js');
const CommentSchema = require('./models/comments.js');
const { config } = require('dotenv');
config();

mongoose.connect(process.env.DB_URI).catch((error) => console.log(error));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res, next) => {
  const blogs = await BlogSchema.find();
  return res.json(blogs);
});

app.get('/:blogid', async (req, res, next) => {
  const id = req.params.blogid;
  const getComments = await CommentSchema.find({ blogId: id });
  console.log(getComments);
  return res.json(getComments);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
