const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { addUser, getAllUsers, deleteUser } = require("../services/user");
const { errorResponse, successResponse } = require("../utils/responses");

exports.addUser = async (req, res, next) => {
  try {
    const { username, name, password, email, phone } = req.body;

    if (!username || !name || !email || !password || !phone) {
      return errorResponse(res, 422, "Please send valid data", {});
    }

    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(password, salt);

    const accessToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });

    const users = await getAllUsers();

    const user = await addUser({
      ...req.body,
      password: hashedPassword,
      role: users.length > 0 ? "USER" : "ADMIN",
    });

    res.cookie("accessToken", accessToken, {
      path: "/",
      httpOnly: true,
      maxAge: 1200000000,
    });

    return successResponse(res, 201, {
      user,
      message: "User created successfully :)",
    });
  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    return successResponse(res, 200, users);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return errorResponse(res, 422, "Please enter user id", {});
    }

    await deleteUser(id);
    return successResponse(res, 200, {
      message: "User deleted successfully :)",
    });
  } catch (error) {
    next(error);
  }
};
