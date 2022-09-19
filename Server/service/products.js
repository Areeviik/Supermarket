const { Product } = require("../models");
const { Op } = require("sequelize");

async function createProduct(req) {
  try {
    const products = await Product.create(req.body);
    return { products };
  } catch (error) {
    return { error };
  }
}

const takeProductList = async (req, res) => {
  try {
    const products = await Product.findAll();
    return { products };
  } catch (error) {
    return { error };
  }
};

async function takeProduct(id) {
  try {
    const product = await Product.findByPk(id);
    return { product };
  } catch (error) {
    return { error };
  }
}

async function deleteProd(id) {
  try {
    const product = await Product.destroy({
      where: { id: id },
    });
    return { product };
  } catch (error) {
    return { error };
  }
}

async function updateProduct(id, count) {
  try {
    const product = await Product.update(
      { count: count },
      {
        where: { id: id },
      }
    );
    return { product };
  } catch (error) {
    return { error };
  }
}

async function getProductsByKeyword(keyword, category) {
  try {
    const products = await Product.findAll({
      where: {
        keywords: {
          [Op.like]: `%${keyword.trim().toLowerCase()}%`,
        },
        category: {
          [Op.like]: `%${category.trim().toLowerCase()}%`,
        },
      },
    });
    return { products };
  } catch (error) {
    return error;
  }
}

module.exports = {
  createProduct,
  takeProductList,
  takeProduct,
  deleteProd,
  updateProduct,
  getProductsByKeyword,
};
