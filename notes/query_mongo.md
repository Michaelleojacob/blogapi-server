# query Mongo

to extract the ids from a mongoose .find() query => `._id.toString();`

```js
const getBlogs = await BlogSchema.find();
getBlogs.forEach((item) => console.log(item._id.toString()));
```