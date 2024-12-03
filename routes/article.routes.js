const express = require("express");
const controller = require("../controllers/article.controller");
const { multerStorage } = require("../middlewares/multer");
const authGuard = require("../middlewares/authGuard");
const router = express.Router();

const multer = multerStorage("public/images/article");

router.route("/").post(authGuard, multer.single("cover"), controller.create);

router.route("/remove/:id").post(authGuard, controller.delete);

module.exports = router;
