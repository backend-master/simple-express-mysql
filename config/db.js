require('dotenv').config();

const mysql = require('mysql');

console.log(process.env);

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT,
});

db.connect((err) => {
  if (err) console.log(`Error ${err}`);
  else {
    console.log('running');
  }
});

module.exports = db;
