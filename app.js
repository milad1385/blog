const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const flash = require("express-flash");
const session = require("express-session");
const path = require("path");
const { errorHandler } = require("./middlewares/errorHandler");
const { setHeaders } = require("./middlewares/headers");

const authRoutes = require("./routes/auth.routes");
const homeRoutes = require("./routes/home.routes");
const adminRoutes = require("./routes/admin.routes");
const tagRoutes = require("./routes/tags.routes");
const articleRoutes = require("./routes/article.routes");

const app = express();

// middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Secret key",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(cookie());
app.use(flash());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//* Cors Policy
app.use(setHeaders);

//* Static Folders
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRoutes);
app.use("/auth", authRoutes);
app.use("/tags", tagRoutes);
app.use("/p-admin", adminRoutes);
app.use("/article", articleRoutes);

app.use((req, res) => {
  console.log("this path is not found:", req.path);
  return res
    .status(404)
    .json({ message: "404! Path Not Found. Please check the path/method" });
});

app.use(errorHandler);
// routes
module.exports = app;
