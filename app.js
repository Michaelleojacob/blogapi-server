const express = require('express');
const mongoose = require('mongoose');
const BlogSchema = require('./models/blogs.js');
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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
