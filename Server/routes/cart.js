const express = require("express");
const router = express.Router();
const { addToCart } = require("../controller/cart");
const { updateCart } = require("../controller/cart");
const { getCart } = require("../controller/cart");
const { deleteCart } = require("../controller/cart");
const { authJwt } = require("../middleware/authJwt");
//const { updateValidation } = require("../validators/cartValidation");

router.post("/", [authJwt.verifyToken], addToCart);
router.put("", [authJwt.verifyToken], updateCart);
router.get("", [authJwt.verifyToken], getCart);
router.delete("", [authJwt.verifyToken], deleteCart);

module.exports = router;
