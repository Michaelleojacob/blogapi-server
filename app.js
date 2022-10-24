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
const allowlist = [
  'http://localhost:3000',
  'https://blogapi-client-danofq240-michaelleojacob.vercel.app',
];
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

// get all blogs
app.get('/', async (req, res, next) => {
  console.log(`${req.protocol}://${req.headers.host}`);
  console.log(`${req.protocol}://${req.hostname}${req.originalUrl}`);
  const blogs = await BlogSchema.find({ hidden: false });
  return res.json(blogs);
});

// get single blog and comments
app.get('/blog/:id', async (req, res, next) => {
  const blog = await BlogSchema.find({ _id: req.params.id });
  const comments = await CommentSchema.find({ blogId: req.params.id });
  return res.json([...blog, comments]);
});

// get just the comments
app.get('/blogs/:blogId', async (req, res, next) => {
  const { blogId } = req.params;
  const getComments = await CommentSchema.find({ blogId });
  return res.json(getComments);
});

class Comment {
  constructor({ blogId, title, body, date }) {
    this.blogId = blogId;
    this.title = title;
    this.body = body;
    this.date = date || new Date();
  }
}

// new comment
app.post('/blog/:id/newComment', async (req, res, next) => {
  try {
    const { title, body, id } = req.body;
    const comment = new Comment({ blogId: id.id, title, body });
    await CommentSchema.create(comment);
    const getComments = await CommentSchema.find({ blogId: id.id });
    return res.json(getComments);
  } catch (err) {
    return console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, (req, res) => {
  console.log(`app is listening on port ${port}`);
});
