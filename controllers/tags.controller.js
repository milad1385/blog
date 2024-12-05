const Tag = require("../services/tags");
const Article = require("../services/articles");
exports.create = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      req.flash("error", "لطفا عنوان تگ را انتخاب کنید");
      return res.redirect("back");
    }

    await Tag.create(title);

    req.flash("success", "تگ با موفقیت ساخته شد");

    return res.redirect("back");
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      req.flash("error", "لطفا شناسه تگ را ارسال کنید");
      return res.redirect("back");
    }

    await Tag.delete(id);

    req.flash("success", "تگ با موفقیت حذف شد");

    return res.redirect("back");
  } catch (error) {
    next(error);
  }
};

exports.getRelativeTagArticle = async (req, res, next) => {
  try {
    const { slug } = req.params;

    if (!slug) {
      return res.redirect("/");
    }

    const tag = await Tag.findByTitle(slug);

    if (!tag) {
      return res.redirect("/");
    }

    console.log(tag);

    const articles = await Article.getArticlesFromTag(tag.id);
    return res.render("tagArticles.ejs", { articles, tag });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id, title } = req.body;

    if (!id || !title) {
      return res.redirect("back");
    }

    await Tag.findByIdAndUpdate(title, id);
    req.flash("success", "عنوان تگ با موفقیت آپدیت شد");

    return res.redirect("back");
  } catch (error) {
    next(error);
  }
};
