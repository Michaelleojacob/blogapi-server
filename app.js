const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BlogSchema = require('./models/blogs.js');
const CommentSchema = require('./models/comments.js');
const { config } = require('dotenv');
config();

mongoose.connect(process.env.DB_URI).catch((error) => console.log(error));

const app = express();

// cors boilerplate / allow list
const allowlist = ['http://localhost:3000', 'http://example2.com'];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res, next) => {
  console.log(`${req.protocol}://${req.headers.host}`);
  console.log(`${req.protocol}://${req.hostname}${req.originalUrl}`);
  const blogs = await BlogSchema.find({ hidden: false });
  return res.json(blogs);
});

app.get('/:id', async (req, res, next) => {
  console.log(req.params.id);
  const blog = await BlogSchema.find({ _id: req.params.id });
  const comments = await CommentSchema.find({ blogId: req.params.id });
  return res.json([...blog, ...comments]);
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
