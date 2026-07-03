import { Op } from "sequelize";
import { Product, User } from "../models/index.js";

export const getDashboardSummary = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId);

    const products = await Product.findAll({
      where: {
        organizationId: user.organizationId,
      },
    });

    const totalProducts = products.length;

    const totalQuantity = products.reduce((total, product) => {
      return total + product.quantityOnHand;
    }, 0);

    const lowStockItems = await Product.findAll({
      where: {
        organizationId: user.organizationId,
        quantityOnHand: {
          [Op.lte]: 5,
        },
      },
      attributes: ["id", "name", "sku", "quantityOnHand", "lowStockThreshold"],
    });

    res.status(200).json({
      totalProducts,
      totalQuantity,
      lowStockItems,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
};
