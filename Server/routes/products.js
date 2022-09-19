const express = require("express");
const router = express.Router();
const {
  getProduct,
  searchProducts,
  getProductList,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controller/product");
const { productPostValidation } = require("../validators/validation");

router.get("/products", getProductList);

router.post("/products", (req, res) => {
  productPostValidation(req, function (resp) {
    if (resp) postProduct(req, res);
    else res.status(400).send("Invalid Input");
  });
});
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { count } = req.body;
  putProduct(res, id, count);
});
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  deleteProduct(res, id);
});
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  getProduct(res, id);
});
router.post("/products/search", (req, res) => {
  const { keyword, category } = req.body;
  searchProducts(res, keyword, category);
});

module.exports = router;
