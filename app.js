const express = require('express');
const { config } = require('dotenv');
config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ goodbye: 'world' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
