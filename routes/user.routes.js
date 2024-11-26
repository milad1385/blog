const express = require("express");
const controller = require("../controllers/user.controller");
const router = express.Router();

router.route("/").post(controller.addUser).get(controller.getAll);

router.route("/:id").delete(controller.delete)

module.exports = router;
