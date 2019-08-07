# Express CRUD with MySql

Connecting our Express app with MySql Database.

you can clone this repository and install requirement dependency using npm :

```sh
npm install
```

or using yarn:

```sh
yarn
```

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
