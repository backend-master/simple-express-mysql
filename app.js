require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 5000;

const db = require('./config/db');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bookRoute = require('./routes/books');

app.use('/api/v1/books', bookRoute);
app.use('/test', (req, res) => {
  db.query('SELECT 1', [], (err, result) => {
    if (err) {
      res.status(500).json({ err });
    } else {
      res.status(200).json({ msg: 'connected' });
    }
  });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
