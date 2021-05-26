const express = require("express");
const app = express();
const http = require("http");
var server = app.listen(3001);
const mysql = require("mysql");
const bodyParser = require("body-parser");

const cors = require("cors");

const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const { error } = require("console");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bartin",
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 60 * 60 * 24,
    },
  })
);

const PORT = 3001;

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
      } else {
        res.send({ message: "yanlış kullanıcı adı/şifre kombinasyonu" });
      }
    }
  );
});

app.get("/api/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
