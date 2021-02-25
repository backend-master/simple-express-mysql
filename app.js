require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 5000;
const sql = require('mssql')
const {config} = require('./config/db')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/map', require('./routes/cat'))

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
