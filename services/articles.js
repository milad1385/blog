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
