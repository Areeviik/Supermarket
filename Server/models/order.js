const DataTypes = require("sequelize");
const { User } = require("./user.js");
const{ Product } = require("./product.js");
const { sequelize } = require("../config/dbConfig");

const Order = sequelize.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  }
},
{
  createdAt: false,
  updatedAt: false,
  timestamps: false,
});

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User);

module.exports = {Order};
