import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Settings = sequelize.define(
  "Settings",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    defaultLowStockThreshold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
  },
  {
    timestamps: true,
  },
);

export default Settings;
