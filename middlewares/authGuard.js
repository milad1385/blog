const jwt = require("jsonwebtoken");
const { env } = require("../utils/helpers");
const User = require("../services/users");

module.exports = async (req, res, next) => {
  try {
    const accessToken = req.cookies?.["access-token"];

    if (!accessToken) {
      return res.redirect("/auth/login");
    }

    const payload = jwt.verify(accessToken, env.auth.accessTokenSecret);

    const user = await User.getUserById(payload.id);

    if (!payload) {
      return res.redirect("/auth/login");
    }

    if (user.role === "user") {
      return res.redirect("/auth/login");
    }

    req.user = user;

    next();
  } catch (error) {
    return res.redirect("/auth/login");
  }
};
