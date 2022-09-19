const {Order} = require("../models");
const {Cart} = require("../models")
const {OrderProduct} = require("../models");
const {User} = require("../models");
const {Product} = require("../models");
const {CartAssignment} = require("../models");
const { Op } = require("sequelize");


const createOrderService = async (userId) => {
  const order =  await Order.create({
    userId
  })

  const cart = await Cart.findOne({
    where: {
      userId
    }
  })

  const cartAssignments = await CartAssignment.findAll({
    where: {
      cartId: cart.id
    },
    include: {
      model: Product,
      attributes: ['price']
    },
    attributes: ['id', 'productId', 'count']
  })

  const a = await OrderProduct.bulkCreate(cartAssignments.map(({product: {price}, productId, count}) => ({
    productId,
    count,
    price,
    orderId: order.id
  })))

  await CartAssignment.destroy({
    where: {
      id: {
        [Op.or]: cartAssignments.map(({id}) => id)
      }
    }
  })


  return a;

}

module.exports = {
  createOrderService
}