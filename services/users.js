const db = require("./../configs/db");

exports.create = async ({ name, username, password, email }) => {
  try {
    const query =
      "INSERT INTO users (name , username , password , email) VALUES (? , ? , ? ,?)";

    const [insertedUser] = await db.execute(query, [
      name,
      username,
      password,
      email,
    ]);

    const getUserQuery = "SELECT * FROM users WHERE id = ?";
    const [user] = await db.execute(getUserQuery, [insertedUser.insertId]);

    return user[0];
  } catch (error) {
    return error.message;
  }
};

exports.getUserById = async (userId) => {
  try {
    const query =
      "SELECT username , name , email , role , avatar , provider FROM users WHERE id = ?";

    const [user] = await db.execute(query, [userId]);

    return user[0];
  } catch (error) {
    return error;
  }
};

exports.getUserByUsername = async (username) => {
  try {
    const query =
      "SELECT * FROM users WHERE username = ?";

    const [user] = await db.execute(query, [username]);

    return user[0];
  } catch (error) {
    return error;
  }
};

exports.isUserExist = async ({ email, username }) => {
  try {
    const query = "SELECT * FROM users WHERE email = ? OR username = ?";

    const user = await db.query(query, [email, username]);

    return user[0].length ? true : false;
  } catch (error) {
    return error;
  }
};

exports.delete = async (userId) => {
  try {
    const query = "DELETE FROM users WHERE id = ?";
    await db.execute(query, [userId]);
  } catch (error) {
    return error;
  }
};
