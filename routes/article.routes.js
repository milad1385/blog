const express = require("express");
const controller = require("../controllers/article.controller");
const authGuard = require("../middlewares/authGuard");
const router = express.Router();

router.route("/").post(authGuard, controller.create);

router.route("/remove/:id").post(authGuard, controller.delete);



module.exports = router;
