import sequelize from "../config/database.js";

import Organization from "./Organization.js";
import User from "./User.js";
import Product from "./Product.js";

//relation between organization and user


Organization.hasMany(User, {
  foreignKey: "organizationId",
  onDelete: "CASCADE",
});

User.belongsTo(Organization, {
  foreignKey: "organizationId",
});


//organization and product relation


Organization.hasMany(Product, {
  foreignKey: "organizationId",
  onDelete: "CASCADE",
});

Product.belongsTo(Organization, {
  foreignKey: "organizationId",
});

export { sequelize, Organization, User, Product };
