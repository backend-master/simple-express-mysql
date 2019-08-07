require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8800;
const mysql = require("mysql");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "ayogatot",
  password: "inipassword"
});

db.connect(err => {
  if (err) console.log(err);
  console.log("connect");
});

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "hello world ~"
  });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
