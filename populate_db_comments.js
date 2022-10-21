const mongoose = require('mongoose');
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

class Blog {
  constructor(title, author, body, date, hidden) {
    this.title = title;
    this.author = author;
    this.body = body;
    this.date = date || new Date();
    this.hidden = hidden;
  }
}

const blogs = [
  new Blog(
    'one',
    'migs',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam est felis, sed vestibulum lacus hendrerit ac. Praesent volutpat ante a porttitor posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis auctor imperdiet lacinia. Phasellus quis ex pellentesque, efficitur quam nec, ornare nibh. Aliquam et orci pellentesque, suscipit ipsum sed, dapibus orci. Aenean cursus blandit enim, a facilisis nisi pretium sit amet. Integer laoreet dapibus enim, ut feugiat nisi tempor a. Mauris eu malesuada nisi. Duis non efficitur ex. Nulla condimentum accumsan massa, vitae pharetra enim placerat id. Duis sit amet augue ut lacus aliquet finibus et ut erat. Pellentesque semper tortor magna, vitae euismod magna maximus eu. Pellentesque tempus ornare tellus. Vestibulum dictum, risus quis faucibus suscipit, risus felis aliquam velit, quis rhoncus ligula eros eget diam. Fusce elementum justo ut porta suscipit.',
    new Date(),
    false
  ),
  new Blog('two', 'josh', 'Lorem', new Date(), false),
  new Blog('three', 'foam', 'ipsum', new Date(), false),
  new Blog('four', 'lofty', 'dolor', new Date(), false),
  new Blog('five', 'peachO', 'sit', new Date(), false),
  new Blog('six', 'ris', 'amet', new Date(), false),
  new Blog('seven', 'berry', 'lol', new Date(), true),
];

const seedDB = async () => {
  await BlogSchema.deleteMany({});
  await BlogSchema.insertMany(blogs);
};

seedDB().then(() => {
  mongoose.connection.close();
});
