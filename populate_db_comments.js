// const mongoose = require('mongoose');
// const CommentSchema = require('./models/comments.js');
// const BlogSchema = require('./models/blogs.js');
// const { config } = require('dotenv');
// config();

// mongoose
//   .connect(process.env.DB_URI)
//   .then(() => {
//     console.log(`MongoDB connection open`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// class Comment {
//   constructor({ blogId, title, body, date }) {
//     this.blogId = blogId;
//     this.title = title;
//     this.body = body;
//     this.date = date || new Date();
//   }
// }

// const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// const titles = [
//   'hello',
//   'goodbye',
//   'test',
//   'chicken',
//   'cool',
//   'lorim',
//   'ipsum',
// ];
// const bodies = [
//   'this is a body',
//   'this is not a body',
//   'i like pineapple pizza',
//   'cats > dogs',
//   'dogs > cats',
//   'the odin project',
// ];

// const seedDB = async () => {
//   await CommentSchema.deleteMany({});
//   const getBlogs = await BlogSchema.find();
//   const ids = getBlogs.map((item) => item._id.toString());
//   const comments = [];
//   for (let i = 0; i < 10; i++) {
//     comments.push(
//       new Comment({
//         blogId: randomArrayItem(ids),
//         title: randomArrayItem(titles),
//         body: randomArrayItem(bodies),
//       })
//     );
//   }
//   await CommentSchema.insertMany(comments);
// };

// seedDB().then(() => {
//   mongoose.connection.close();
// });
