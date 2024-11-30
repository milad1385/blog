const express = require("express");
const controller = require("./../controllers/auth.controller");
const router = express.Router();

router.route("/register").post(controller.register);
router.route("/login").post(controller.login).get(controller.showLoginView);
router.route("/refresh-token").post(controller.refreshToken);
router.route("/me").post(controller.getMe);

module.exports = router;
