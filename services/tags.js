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

exports.findById = async (id) => {
  try {
    const query = "SELECT * FROM tags WHERE id = ?";

    const [tag] = await db.execute(query, [id]);

    return tag[0];
  } catch (error) {
    next(error);
  }
};

exports.findByTitle = async (title) => {
  try {
    const query = "SELECT * FROM tags WHERE title = ?";

    const [tag] = await db.execute(query, [title]);

    return tag[0];
  } catch (error) {
    next(error);
  }
};

exports.findAll = async () => {
  try {
    const query = "SELECT * FROM tags ORDER BY id DESC";

    const [tags] = await db.execute(query);

    return tags;
  } catch (error) {
    next(error);
  }
};

exports.delete = async (id) => {
  try {
    const query = "DELETE FROM tags WHERE id = ?";

    await db.execute(query, [id]);

    return true;
  } catch (error) {
    next(error);
  }
};

exports.findByIdAndUpdate = async (title, id) => {
  try {
    const query = "UPDATE tags SET title = ? WHERE id = ?";

    await db.execute(query, [title, id]);

    return true;
  } catch (error) {
    next(error);
  }
};
