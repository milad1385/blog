const db = require("../configs/db");

exports.addUser = async (data) => {
  try {
    const query = "INSERT INTO user SET ?";
    const user = await db.query(query, data);
  } catch (error) {
    return error;
  }
};

exports.getAllUsers = async () => {
  try {
    const query =
      "SELECT name , username, phone, email, role, address, age FROM user";
    const [users] = await db.query(query);
    return users;
  } catch (error) {
    return error;
  }
};

exports.deleteUser = async (id) => {
  try {
    const query = "DELETE FROM user WHERE id = ?";
    const user = await db.query(query, [id]);
    console.log(user);
  } catch (error) {
    next(error);
  }
};
