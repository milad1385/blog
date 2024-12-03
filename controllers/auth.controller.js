const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../services/users");
const { registerSchema, loginSchema } = require("../validators/auth.validator");
const { env } = require("../utils/helpers");

exports.showLoginView = (req, res, next) => {
  try {
    return res.render("auth/login");
  } catch (error) {
    next(error);
  }
};

exports.showRegisterView = (req, res, next) => {
  try {
    return res.render("auth/register");
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    await registerSchema.validate({ ...req.body }, { abortEarly: false });

    const isUserExist = await User.isUserExist({ email, username });

    if (isUserExist) {
      req.flash("error", "کاربری با این اطلاعات وجود دارد");
      return res.redirect("back");
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
      maxAge: 60_000_000_000,
    });

    res.cookie("refresh-token", hashedRefreshToken, {
      path: "/",
      httpOnly: true,
      maxAge: 60_000_000_000,
    });

    req.flash("success", "کاربر با موفقیت ثبت نام شد");

    return res.redirect("back");
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    await loginSchema.validate({ ...req.body }, { abortEarly: false });

    const user = await User.getUserByUsername(username);

    if (!user) {
      req.flash("error", "نام کاربری یا رمز عبور اشتباه است");
      return res.redirect("back");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      req.flash("error", "نام کاربری یا رمز عبور اشتباه است");
      return res.redirect("back");
    }

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
      maxAge: 60_000_000_000,
    });

    res.cookie("refresh-token", hashedRefreshToken, {
      path: "/",
      httpOnly: true,
      maxAge: 60_000_000_000,
    });

    req.flash("success", "کاربر با موفقیت وارد شد");

    return res.redirect("back");
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
