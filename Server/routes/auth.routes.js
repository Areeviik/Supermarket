const express = require("express");
const router = express.Router();
const { verifySignUp } = require("../middleware/verifySignUp");
const controller = require("../controller/auth.controller");

router.post(
  "/register",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  controller.signup
);

router.post("/login", controller.signin);

router.post("/signout", controller.signout);

module.exports = router;
