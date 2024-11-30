require("dotenv").config();
exports.env = {
  db: {
    uri: process.env.DATABASE_URI,
    poolSize: process.env.POOL_SIZE || 10,
  },
  app: {
    port: process.env.PORT,
  },
  auth: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET_KEY,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET_KEY,
    accessTokenExpire: process.env.ACCESS_TOKEN_EXPIRES_IN_SECONDS,
    refreshTokenExpire: process.env.REFRESH_TOKEN_EXPIRES_IN_SECONDS,
  },
};
