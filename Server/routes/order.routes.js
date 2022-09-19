const express = require("express");
const { CartAssignment, Order } = require("../models");
const router = express.Router();
const {createOrder} = require("../controller/order")
const { authJwt } = require("../middleware/authJwt");

router.post("/",[authJwt.verifyToken], createOrder);

module.exports = router