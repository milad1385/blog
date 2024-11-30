const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../services/users");

const { env } = require("../utils/helpers");

exports.register = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    // validations

    const isUserExist = await User.isUserExist({ email, username });

    if (isUserExist) {
      return res.status(422).json({
        message: "This user with this email or password is exist in db",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({ ...req.body, password: hashedPassword });

    const accessToken = jwt.sign(
      { id: user.id, role: user.role },
      env.auth.accessTokenSecret,
      { expiresIn: env.auth.accessTokenExpire + "s" }
    );

    const refreshToken = jwt.sign(
      { id: user.id, role: user.role },
      env.auth.refreshTokenSecret,
      { expiresIn: env.auth.refreshTokenExpire + "s" }
    );

    const hashedRefreshToken = await bcrypt.hash(refreshToken, 12);

    res.cookie("access-token", accessToken, {
      path: "/",
      httpOnly: true,
      maxAge: 60_000,
    });

    res.cookie("refresh-token", hashedRefreshToken, {
      path: "/",
      httpOnly: true,
      maxAge: 60_000,
    });

    req.flash("success", "User Register successfully :)");

    return res.status(201).json({
      message: "User register successfully :)",
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
