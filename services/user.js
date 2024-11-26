const db = require("../configs/db");

exports.addUser = async (data) => {
  try {
    const query = "INSERT INTO user SET ?";
    const user = await db.query(query, data);

    console.log(user);
  } catch (error) {
    return error;
  }
};
