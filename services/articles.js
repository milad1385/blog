const db = require("../configs/db");


exports.create = async ({ title, content, slug, cover, author_id }) => {
  try {
    const insertQuery =
      "INSERT INTO articles (id , title , content , cover , slug , author_id)  VALUES (NULL , ? , ? , ? , ? , ?)";

    const [insertedArticle] = await db.execute(insertQuery, [
      title,
      content,
      cover,
      slug,
      author_id,
    ]);

    const [mainArticle] = await db.execute(
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

exports.getArticlesFromTag = async (tagId) => {
  try {
    const query = `SELECT articles.id,articles.title , articles.content , articles.cover , articles.slug , users.name AS author , tags.title AS tag
    FROM articles_tags
    INNER JOIN articles
    ON articles.id = articles_tags.article_id
    INNER JOIN users
    ON users.id = articles.author_id
    INNER JOIN tags
    ON tags.id = articles_tags.tag_id
    WHERE articles_tags.tag_id = ?`;

    

    const [articles] = await db.execute(query, [tagId]);
    console.log(articles);
    
    return articles;
  } catch (error) {
    next(error);
  }
};



