# wildcard routes app.get('/') and app.get('/:id')

https://stackoverflow.com/questions/64616507/favicon-ico-passed-as-url-param-in-node

`app.get('/:blogId')` was causing `blogId: "favicon.ico"` as a req.param

Because `/:blogId` is essentially a wild card `get()`.

To resolve this issue, I simply put the blog comments behind the blog in the url

`'/:blogId'` -> `'/blogs/:blogId'`