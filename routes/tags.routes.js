const express = require("express");
const controller = require("../controllers/tags.controller");
const router = express.Router();

router.route("/").post(controller.create);

router.route("/remove/:id").post(controller.delete);

module.exports = router;
