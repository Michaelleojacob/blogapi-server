const express = require('express');

const app = express();

const users = [
  { name: 'a', id: 1 },
  { name: 'b', id: 2 },
  { name: 'c', id: 3 },
  { name: 'd', id: 4 },
  { name: 'e', id: 5 },
  { name: 'f', id: 6 },
  { name: 'g', id: 7 },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ users });
});

app.post('/', (req, res) => {
  console.log(req.body);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
