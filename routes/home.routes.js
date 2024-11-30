const express = require("express");
const controller = require("../controllers/home.controller");
const router = express.Router();

router.route("/").get(controller.showHomeView);



module.exports = router;
