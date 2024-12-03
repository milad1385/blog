const Tag = require("../../services/tags");
exports.showTagsView = async (req, res, next) => {
  try {
    const tags = await Tag.findAll();

    const user = req.user;

    return res.render("p-admin/tags", { tags, user });
  } catch (error) {
    next(error);
  }
};

exports.showArticleView = async (req, res, next) => {
  try {
    const user = req.user;
    return res.render("p-admin/createArticle", { user });
  } catch (error) {
    next(error);
  }
};
