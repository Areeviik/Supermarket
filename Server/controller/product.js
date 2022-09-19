const {
  createProduct,
  takeProductList,
  takeProduct,
  deleteProd,
  updateProduct,
  getProductsByKeyword,
} = require("../service/products.js");

const postProduct = async (req, res) => {
  const { error, products } = await createProduct(req);
  if (error) res.status(406).send("Can't create products");
  res.status(200).send(products);
};

const getProductList = async (req, res) => {
  const { error, products } = await takeProductList();
  if (error) res.status(406).send("Can't get products");
  res.status(200).send(products);
};

const getProduct = async (res, id) => {
  const { error, product } = await takeProduct(id);
  if (error) res.status(406).send("Can't get a product");
  res.status(200).send(product); 
};

const deleteProduct = async (res, id) => {
  const { error, product } = await deleteProd(id);
  if (error) res.Status(406).send("Can't delete products");
  res.sendStatus(200).send(product);
};

const putProduct = async (res, id, count) => {
  const { error, product } = await updateProduct(id, count);
  if (error) res.status(406).send("Can't update a product");
  res.status(200).send(product);
};

const searchProducts = async (res, keyword,category) => {
  const { error, products } = await getProductsByKeyword(keyword,category);
  if (error) res.status(406).send("Can't get a product");
  res.status(200).send(products);
};

module.exports = {
  postProduct,
  getProductList,
  getProduct,
  deleteProduct,
  putProduct,
  searchProducts,
};
