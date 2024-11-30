exports.showHomeView = async (req, res, next) => {
  try {
    return res.render("index");
  } catch (error) {
    next(error);
  }
};
