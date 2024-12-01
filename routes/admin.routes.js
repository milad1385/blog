const express = require("express");
const controller = require("./../controllers/p-admin/tags.controller");
const router = express.Router();

router.route("/tags").get(controller.showTagsView);

module.exports = router;
