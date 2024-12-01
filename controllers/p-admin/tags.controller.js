exports.showTagsView = async (req, res, next) => {
  try {
    return res.render("p-admin/tags");
  } catch (error) {
    next(error);
  }
};
