require("dotenv").config();
exports.env = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_DATEBASE_NAME,
  },
  app: {
    port: process.env.PORT,
  },
};
