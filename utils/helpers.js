require("dotenv").config();
exports.env = {
  db: {
    uri: process.env.DATABASE_URI,
    poolSize: process.env.POOL_SIZE || 10,
  },
  app: {
    port: process.env.PORT,
  },
};
