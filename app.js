const express = require("express");
const cors = require("cors");
const cookie = require("express");
const flash = require("express-flash");
const path = require("path");
const {errorHandler} = require("./middlewares/errorHandler");
const {setHeaders} = require("./middlewares/headers");

const app = express();

// middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(flash());

//* Cors Policy
app.use(setHeaders);

//* Static Folders
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
  console.log("this path is not found:", req.path);
  return res
    .status(404)
    .json({ message: "404! Path Not Found. Please check the path/method" });
});

app.use(errorHandler);
// routes
module.exports = app;
