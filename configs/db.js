const mysql = require("mysql2/promise");
const { env } = require("../utils/helpers");

// const connection = mysql.createConnection({
//   host: env.db.host,
//   user: env.db.user,
//   password: env.db.password,
//   database: env.db.dbName,
// });

const connection = mysql.createPool({
  uri: env.db.uri,
  connectionLimit: env.db.poolSize,
});

// connection.connect((err) => {
//   if (err) throw err;
//   console.log("connected to db successfully :)");
// });

module.exports = connection;
