const { authJwt } = require("../middleware/authJwt");
const controller = require("../controller/user.controller");

const express = require("express");
const router = express.Router();

 
  router.get(
    "/me",
    [authJwt.verifyToken],
    controller.userBoard
  );


module.exports = router;