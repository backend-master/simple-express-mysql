# Integrate Express with MySql

Connecting our Express app with MySql Database.

you can clone this repository and install requirement dependency using npm :

```sh
npm install
```

or using yarn:

```sh
yarn
```

This project structure will be like this :

```sh
.
+-- config
|   +- db.js
+-- controllers
|   +- booksController.js
+-- routes
|   +- books.js
+-- app.js
+-- package.json
+-- yarn.lock
+-- README.md
```

## API Endpoints

### /api/v1/books

| Endpoint                 | HTTP | Description           | Body |
| ------------------------ | ---- | --------------------- | ---- |
| `/api/v1/books/createTB` | GET  | Create New Book Table |      |
| `/api/v1/books/deleteTB` | GET  | Delete New Book Table |      |

## Connect to MySql

first you need to import mysql :

```sh
const mysql = require("mysql");
```

and define your username, password, host, and dbName :

```sh
const db = mysql.createConnection({
  host: "your_host",
  user: "username",
  password: "password"
});
```

and you can check if your configuration is correct will show log :

```sh
db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect");
  }
});
```

## Explanation

import your config file :

```sh
const db = require("../config/db");
```

To Create / Delete table we must write RAW Query like this :

```sh
exports.createDatabase = (req, res) => {
  db.connect(err => {
    if (err) {
      return console.log(err);
    } else {
      const sql = ` CREATE TABLE books
      (
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        author VARCHAR(255)
      )
        `;
      db.query(sql, (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          res.status(200).json({
            msg: "Table Created"
          });
        }
      });
    }
  });
};
```

## Reference

- [NodeJs with MySql](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
- [Cara Menggunakan Database MySQL pada Nodejs](https://www.petanikode.com/nodejs-mysql/)
- [SQL Tutorial](https://www.duniailkom.com/tutorial-belajar-mysql-dan-index-artikel-mysql/)
