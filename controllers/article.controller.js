const Article = require("../services/articles");
const Tag = require("../services/tags");

const { articleSchema } = require("../validators/article.validator");

exports.create = async (req, res, next) => {
  try {
    const { title, slug, content, tags } = req.body;

    await articleSchema.validate({ ...req.body }, { abortEarly: false });

    if (!req.file) {
      req.flash("error", "آپلود کاور مقاله الزامی است");
      return res.redirect("back");
    }

    const article = await Article.create({
      title,
      slug,
      content,
      author_id: req.user.id,
      cover: req.file.filename,
    });

    tags.forEach(async (tag) => {
      await Article.addTag(article.id, tag);
    });

    req.flash("success", "مقاله با موفقیت ساخته شد");
    return res.redirect("back");
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

exports.getRelativeArticles = async (req, res, next) => {
  try {
    const { tagTitle } = req.params;

    if (!tagTitle) {
      req.flash("error", "Please send tag title");
      return res.redirect("back");
    }

    const tag = await Tag.findByTitle(tagTitle);

    const articles = await Article.getArticlesFromTag(tag.id);

    return res.render("", { articles });
  } catch (error) {
    next(error);
  }
};
