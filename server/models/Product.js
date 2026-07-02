import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    sku: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    quantityOnHand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    costPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },

    sellingPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },

    lowStockThreshold: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 5,
    },
  },
  {
    timestamps: true,
  },
);

export default Product;
