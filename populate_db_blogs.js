// const mongoose = require('mongoose');
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

// class Blog {
//   constructor(title, author, body, date, hidden) {
//     this.title = title;
//     this.author = author;
//     this.body = body;
//     this.date = date || new Date();
//     this.hidden = hidden;
//   }
// }

// const blogs = [
//   new Blog('one', 'migs', 'Lorem ipsum dolor', new Date(), false),
//   new Blog('two', 'josh', 'Lorem', new Date(), false),
//   new Blog('three', 'foam', 'ipsum', new Date(), false),
//   new Blog('four', 'lofty', 'dolor', new Date(), false),
//   new Blog('five', 'peachO', 'sit', new Date(), false),
//   new Blog('six', 'ris', 'amet', new Date(), false),
//   new Blog('seven', 'berry', 'lol', new Date(), true),
// ];

// const seedDB = async () => {
//   await BlogSchema.deleteMany({});
//   await BlogSchema.insertMany(blogs);
// };

// seedDB().then(() => {
//   mongoose.connection.close();
// });
