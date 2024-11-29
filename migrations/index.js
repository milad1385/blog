const db = require("../configs/db");
const path = require("path");
const fs = require("fs");

const migration = async () => {
  const createArticleQuery = fs.readFileSync(
    path.resolve(__dirname, "./articles-ddl.sql"),
    "utf-8"
  );

  console.log(createArticleQuery);
  

  const createTagQuery = fs.readFileSync(
    path.resolve(__dirname, "./tags-ddl.sql"),
    "utf-8"
  );

  const createUsersQuery = fs.readFileSync(
    path.resolve(__dirname, "./users-ddl.sql"),
    "utf-8"
  );

  const createArticlesTags = fs.readFileSync(
    path.resolve(__dirname, "./articles-tags-ddl.sql"),
    "utf-8"
  );

  await db.query(createUsersQuery);
  await db.query(createArticleQuery);
  await db.query(createTagQuery);
  await db.query(createArticlesTags);
};

migration();
