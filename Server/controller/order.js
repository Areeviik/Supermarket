const {
  createOrderService,
  takeOrderList,
  takeOrder, } = require("../service/order.js");


const createOrder = async (req, res) => {
  const userId = req.user.id

  const a = await createOrderService(userId)

  res.json(a)

}
module.exports = {
  createOrder
}