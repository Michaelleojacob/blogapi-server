const express = require('express');
const mongoose = require('mongoose');
const BlogSchema = require('./models/blogs.js');
const CommentSchema = require('./models/comments.js');
const url = require('url');
const { config } = require('dotenv');
config();

mongoose.connect(process.env.DB_URI).catch((error) => console.log(error));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res, next) => {
  const blogs = await BlogSchema.find({ hidden: false });
  return res.json(blogs);
});

app.get('/blogs/:blogId', async (req, res, next) => {
  const { blogId } = req.params;
  const getComments = await CommentSchema.find({ blogId });
  return res.json(getComments);
});

const PORT = 3009;
app.listen(PORT, (req, res) => {
  console.log(`app is listening on port ${PORT}`);
});
