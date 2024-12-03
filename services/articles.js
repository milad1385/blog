const db = require("../configs/db");

exports.create = async ({ title, content, slug, author_id }) => {
  try {
    const insertQuery =
      "INSERT INTO articles (id , title , content , slug , author_id) VALUES (NULL , ? , ? , ? , ?)";

    const [insertedArticle] = await db.execute(insertQuery, [
      title,
      content,
      slug,
      author_id,
    ]);

    const mainArticle = await db.execute(
      "SELECT * FROM articles WHERE id = ?",
      [insertedArticle.insertId]
    );

    return mainArticle[0];
  } catch (error) {
    next(error);
  }
};

exports.findByIdAndDelete = async (id) => {
  try {
    const query = "DELETE FROM articles WHERE id = ?";
    await db.execute(query, [id]);
    return true;
  } catch (error) {
    next(error);
  }
};
exports.getAll = async () => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.addTag = async (articleId, tagId) => {
  try {
    const query = "INSERT INTO articles_tags VALUES (NULL , ? , ?)";

    await db.execute(query, [articleId, tagId]);

    return true;
  } catch (error) {
    next(error);
  }
};
