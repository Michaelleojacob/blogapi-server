# to get the full url of the site on req.

```js
  console.log(`${req.protocol}://${req.headers.host}`);
  console.log(`${req.protocol}://${req.hostname}${req.originalUrl}`);
```

another option is to do this:
```js
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```