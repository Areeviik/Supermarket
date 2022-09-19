const { Cart } = require("../models/cart");
const { CartAssignment } = require("../models/cartAssignment");
const { Product } = require("../models/product");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const addToCartService = async (userId, reqBody) => {
  try {
    const { productId } = reqBody;
    const cart = await Cart.findOne({
      where: { userId },
    });
    const cartAssignment = await CartAssignment.findOne({
      where: {
        productId,
        cartId: cart.id,
      },
    });
    if (cartAssignment) {
      cartAssignment.count = cartAssignment.count + 1;
      await cartAssignment.save();
      return { cart: cartAssignment };
    }
    const res = await CartAssignment.create({
      cartId: cart.id,
      productId: productId,
      count: 1,
    });
    return { res };
  } catch (error) {
    return { error };
  }
};

const updateCartContent = async (userId, reqBody) => {
  try {
    const { productId, count } = reqBody;
    const cart = await Cart.findOne({
      where: { userId },
    });

    const cartAssignment = await CartAssignment.findOne({
      where: {
        productId,
        cartId: cart.id,
      },
    });

    if (cartAssignment.count < 0) {
      throw new Error("Product count is less than 0");
    }

    cartAssignment.count = count;
    await cartAssignment.save();

    return { cart: cartAssignment };
  } catch (error) {
    return { error };
  }
};

const getCartContent = async (userId) => {
  try {
    const cart = await Cart.findOne({ where: { userId } });
    const cartId = cart.id;

    const cartAssignments = await CartAssignment.findAll({
      where: {
        cartId,
        count: {
          [Op.not]: 0,
        },
      },
      include: {
        model: Product,
        attributes: ["id", "title", "price", "imgUrl"],
        as: "product",
      },
      attributes: ["count", "cartId"],
    });
    return { cart: cartAssignments };
  } catch (error) {
    return { error };
  }
};

const deleteCartContent = async (userId) => {
  try {
    const cart = await Cart.findOne({
      where: { userId },
    });
    const deleteCartAssignment = await CartAssignment.destroy({
      where: { cartId: cart.id },
    });
    return { cart: deleteCartAssignment };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  addToCartService,
  updateCartContent,
  getCartContent,
  deleteCartContent,
};
