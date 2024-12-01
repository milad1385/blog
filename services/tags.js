const db = require("../configs/db");

exports.create = async (title) => {
  try {
    const query = "INSERT INTO tags (title) VALUES (?)";

    const [insertedTag] = await db.execute(query, [title]);

    const getMainTagQuery = "SELECT * FROM tags WHERE id = ?";

    const [tag] = await db.execute(getMainTagQuery, [insertedTag.insertId]);

    return tag[0];
  } catch (error) {
    next(error);
  }
};


