const DataTypes = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const { Order } = require("./order.js");
const { Product } = require("./product")

const OrderProduct = sequelize.define("orderProducts", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      ket: 'id'
    }
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'orders',
      ket: 'id'
    }
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  createdAt: false,
  updatedAt: false,
  timestamps: false,
});

Order.hasMany(OrderProduct, { foreignKey: "orderId" });
OrderProduct.belongsTo(Order);

Product.hasMany(OrderProduct, { foreignKey: "productId" });
OrderProduct.belongsTo(Product);

module.exports = {OrderProduct};
