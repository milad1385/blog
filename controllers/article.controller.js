const Article = require("../services/articles");
const { articleSchema } = require("../validators/article.validator");

exports.create = async (req, res, next) => {
  try {
    const { title, slug, content } = req.body;

    await articleSchema.validate({ ...req.body }, { abortEarly: false });

    const article = await Article.create({
      title,
      slug,
      content,
      author_id: req.user.id,
    });

    console.log(article);

    req.flash("success", "مقاله با موفقیت ساخته شد");
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
