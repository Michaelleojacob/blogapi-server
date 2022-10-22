const mongoose = require('mongoose');
const CommentSchema = require('./models/comments.js');
const BlogSchema = require('./models/blogs.js');
const { config } = require('dotenv');
config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log(`MongoDB connection open`);
  })
  .catch((err) => {
    console.log(err);
  });

class Comment {
  constructor(blogId, title, body, date) {
    this.blogId = blogId;
    this.title = title;
    this.body = body;
    this.date = date;
  }
}

const commentBasedOnBlog = async ({ blog, title, body, date = new Date() }) => {
  const getBlogId = await BlogSchema.findOne({ title: blog });
  const comment = new Comment(getBlogId._id, title, body, date);
  await CommentSchema.create(comment);
};

const seedDB = async () => {
  await CommentSchema.deleteMany({});
  await commentBasedOnBlog({
    blog: 'one',
    title: 'first!',
    body: 'nice blog',
  });
  await commentBasedOnBlog({
    blog: 'one',
    title: 'this is awesome!',
    body: 'learned a lot!',
  });
  await commentBasedOnBlog({
    blog: 'two',
    title: 'in',
    body: 'credible',
  });
  await commentBasedOnBlog({
    blog: 'two',
    title: 'lol',
    body: 'rawr',
  });
  await commentBasedOnBlog({
    blog: 'two',
    title: 'xd',
    body: 'test',
  });
  await commentBasedOnBlog({
    blog: 'three',
    title: 'lorem',
    body: 'ipsum',
  });
  await commentBasedOnBlog({
    blog: 'four',
    title: 'what',
    body: 'in the world',
  });
  await commentBasedOnBlog({
    blog: 'five',
    title: '?',
    body: 'looking for dinner recommendations',
  });
  await commentBasedOnBlog({
    blog: 'five',
    title: 'thai',
    body: 'red curry!',
  });
  await commentBasedOnBlog({
    blog: 'five',
    title: 'mexican',
    body: 'carne asada fries',
  });
  await commentBasedOnBlog({
    blog: 'five',
    title: 'mexican',
    body: 'carne asada fries',
  });
  await commentBasedOnBlog({
    blog: 'six',
    title: 'favorite animals?',
    body: 'ill go first, dogs.',
  });
  await commentBasedOnBlog({
    blog: 'six',
    title: 'animals',
    body: 'cats',
  });
  await commentBasedOnBlog({
    blog: 'six',
    title: 'animals',
    body: 'burritos',
  });
};

seedDB().then(() => {
  mongoose.connection.close();
});
