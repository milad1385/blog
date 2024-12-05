const express = require("express");
const controller = require("../controllers/tags.controller");
const authGuard = require("../middlewares/authGuard");
const router = express.Router();

router.route("/").post(controller.create);

router.route("/remove/:id").post(authGuard, controller.delete);

router.route("/update").post(authGuard , controller.update)

router.route("/:slug").get(authGuard, controller.getRelativeTagArticle);

module.exports = router;
