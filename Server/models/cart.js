const DataTypes = require("sequelize");
const { User } = require("./user.js");
const { sequelize } = require("../config/dbConfig");

const Cart = sequelize.define("carts", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
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

User.hasOne(Cart, { foreignKey: "userId" });
Cart.belongsTo(User);

module.exports = {Cart}
