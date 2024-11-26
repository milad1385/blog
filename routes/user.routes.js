const express = require("express");
const controller = require("../controllers/user.controller");
const router = express.Router();

router.route("/").post(controller.addUser);

module.exports = router;
