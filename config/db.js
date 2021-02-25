require('dotenv').config()

const mysql = require('mysql')

const configMs = {
  server: 'localhost',
  user: 'sa',
  password: '123p@ssword',
  database: 'TestDB'
}

const configMy = {
  host: 'localhost',
  user: 'root',
  password: 'password123',
  database: 'klink',
  port: '3306'
}

const db = mysql.createConnection({
  ...configMy
});

db.connect((err) => {
  if (err) console.log(`Error ${err}`);
  else {
    console.log('running');
  }
});

module.exports = {
  configMs,
  db
}
