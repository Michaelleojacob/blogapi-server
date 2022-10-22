# to get the full url of the site on req.

```js
  console.log(`${req.protocol}://${req.headers.host}`);
  console.log(`${req.protocol}://${req.hostname}${req.originalUrl}`);
```