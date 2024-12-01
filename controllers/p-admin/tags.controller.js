const Tag = require("../../services/tags");
exports.showTagsView = async (req, res, next) => {
  try {
    const tags = await Tag.findAll();

    console.log(tags);
    
    return res.render("p-admin/tags", { tags });
  } catch (error) {
    next(error);
  }
};
