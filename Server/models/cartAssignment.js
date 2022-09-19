const DataTypes = require("sequelize");
const { Cart } = require("./cart.js");
const { Product } = require("./product.js");
const { sequelize } = require("../config/dbConfig");

const CartAssignment = sequelize.define("cartAssignments", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'carts',
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id'
    }
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
  createdAt: false,
  updatedAt: false,
  timestamps: false,
});

Cart.hasMany(CartAssignment, { foreignKey: "cartId" });
CartAssignment.belongsTo(Cart);

Product.hasMany(CartAssignment, { foreignKey: "productId" });
CartAssignment.belongsTo(Product);

module.exports = { CartAssignment };
