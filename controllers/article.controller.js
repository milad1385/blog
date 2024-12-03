const Article = require("../services/articles");
const { articleSchema } = require("../validators/article.validator");

exports.create = async (req, res, next) => {
  try {
    const { title, slug, content, tags } = req.body;

    await articleSchema.validate({ ...req.body }, { abortEarly: false });

    if (!req.file) {
      req.flash("error", "آپلود کاور مقاله الزامی است");
      return res.redirect("back");
    }

    console.log(req.body);

    const article = await Article.create({
      title,
      slug,
      content,
      author_id: req.user.id,
      cover: req.file.filename,
    });

    console.log(article);

    req.flash("success", "مقاله با موفقیت ساخته شد");
    return res.redirect("back");
  } catch (error) {
    console.log(error);
    
    // next(error);
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
