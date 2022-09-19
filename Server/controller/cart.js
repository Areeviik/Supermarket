const {
  addToCartService,
  updateCartContent,
  getCartContent,
  deleteCartContent,
} = require("../service/cart");

const addToCart = async (req, res) => {
  const userId = req.user.id;
  const reqBody = req.body;
  const { error, cart } = await addToCartService(userId, reqBody);

  if (error) {
    console.error(error);
    res.status(400).json({
      error: {
        message: "Error occurred while creating cart.",
      },
    });
  }

  res.status(200).json("cart");
};

const updateCart = async (req, res) => {
  const reqBody = req.body;
  const userId = req.user.id;
  const { error, cart } = await updateCartContent(userId, reqBody);
  if (error) {
    res.status(400).json({ error: "Error occurred while updating cart." });
  }
  console.log(cart);
  res.status(200).json(cart);
};

const getCart = async (req, res) => {
  const userId = req.user.id;
  const cartContent = await getCartContent(userId);

  res.status(200).json(cartContent);
};

const deleteCart = async (req, res) => {
  const userId = req.user.id;
  const { error, cart } = await deleteCartContent(userId);
  if (error) {
    res.status(400).json({ error: "Error occurred while deleting cart." });
  }
  console.log(cart);
  res.status(204).json(cart);
};

module.exports = {
  addToCart,
  updateCart,
  getCart,
  deleteCart,
};
