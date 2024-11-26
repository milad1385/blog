const bcryptjs = require("bcryptjs");
const { addUser } = require("../services/user");
const { errorResponse } = require("../utils/responses");

exports.addUser = async (req, res, next) => {
  try {
    const { username, name, password, email, phone } = req.body;

    if (!username || !name || !email || !password || !phone) {
      return errorResponse(res, 422, "Please send valid data", {});
    }

    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(password, salt);
  } catch (error) {
    next(error);
  }
};
