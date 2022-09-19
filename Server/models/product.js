const DataType = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const images = require("../imgUrl");

const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
    },
    description: {
      type: DataType.STRING,
      allowNull: false,
    },
    country: {
      type: DataType.STRING,
      allowNull: false,
    },
    producer: {
      type: DataType.STRING,
      allowNull: false,
    },
    price: {
      type: DataType.FLOAT,
      allowNull: false,
    },
    keywords: {
      type: DataType.STRING,
      allowNull: false,
    },
    imgUrl: {
      type: DataType.STRING,
      allowNull: true,
    },
    category: {
      type: DataType.STRING,
      allowNull: false,
    },
    count: {
      type: DataType.INTEGER,
      defaultValue: 0,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

module.exports = {Product};
