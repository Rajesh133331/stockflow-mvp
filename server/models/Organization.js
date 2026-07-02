import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Organization = sequelize.define(
  "Organization",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    organizationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

export default Organization;