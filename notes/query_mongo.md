# query Mongo

to extract the ids from a mongoose .find() query => `._id.toString();`

```js
const getBlogs = await BlogSchema.find();
getBlogs.forEach((item) => console.log(item._id.toString()));
```

# arr of our blog ids
```js
[
  '63532a4d919aadef64a76669',
  '63532a4d919aadef64a7666a',
  '63532a4d919aadef64a7666b',
  '63532a4d919aadef64a7666c',
  '63532a4d919aadef64a7666d',
  '63532a4d919aadef64a7666e',
  '63532a4d919aadef64a7666f'
]
```