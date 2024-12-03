const express = require("express");
const controller = require("../controllers/p-admin/p-admin.controller");
const authGuard = require("../middlewares/authGuard");
const router = express.Router();

router.route("/tags").get(authGuard, controller.showTagsView);

router.route("/article").get(authGuard , controller.showArticleView);

module.exports = router;
