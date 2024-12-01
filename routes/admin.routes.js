const express = require("express");
const controller = require("./../controllers/p-admin/tags.controller");
const authGuard = require("../middlewares/authGuard");
const router = express.Router();

router.route("/tags").get(authGuard,controller.showTagsView);

module.exports = router;
