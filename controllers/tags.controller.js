const Tag = require("../services/tags");
exports.create = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      req.flash("error", "لطفا عنوان تگ را انتخاب کنید");
      return res.redirect("back");
    }

    const tag = await Tag.create(title);

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
  } catch (error) {
    next(error);
  }
};

