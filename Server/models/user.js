const DataTypes = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const User = sequelize.define("users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  createdAt: false,
  updatedAt: false,
  timestamps: false,
});

module.exports = { User };
