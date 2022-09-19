const { sequelize } = require('../config/dbConfig')

const { User } = require('./user')
const { Cart } = require('./cart')
const { Product } = require('./product')
const { Order } = require('./order')
const { CartAssignment } = require('./cartAssignment')
const { OrderProduct } = require('./orderProduct')


sequelize.sync({alter: true, force: false})

module.exports = {
  User,
  Cart,
  Product,
  Order,
  CartAssignment,
  OrderProduct
}