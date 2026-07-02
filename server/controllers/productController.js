import { Product, User } from "../models/index.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      sku,
      description,
      quantityOnHand,
      costPrice,
      sellingPrice,
      lowStockThreshold,
    } = req.body;

    if (!name || !sku) {
      return res.status(400).json({
        message: "Product name and SKU are required.",
      });
    }

    const user = await User.findByPk(req.user.userId);

    const existingProduct = await Product.findOne({
      where: {
        sku,
        organizationId: user.organizationId,
      },
    });

    if (existingProduct) {
      return res.status(400).json({
        message: "SKU already exists.",
      });
    }

    await Product.create({
      organizationId: user.organizationId,
      name,
      sku,
      description,
      quantityOnHand,
      costPrice,
      sellingPrice,
      lowStockThreshold,
    });

    res.status(201).json({
      message: "Product created successfully.",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId);

    const products = await Product.findAll({
      where: {
        organizationId: user.organizationId,
      },
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json(products);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      sku,
      description,
      quantityOnHand,
      costPrice,
      sellingPrice,
      lowStockThreshold,
    } = req.body;

    const user = await User.findByPk(req.user.userId);

    const product = await Product.findOne({
      where: {
        id,
        organizationId: user.organizationId,
      },
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
      });
    }

    await product.update({
      name,
      sku,
      description,
      quantityOnHand,
      costPrice,
      sellingPrice,
      lowStockThreshold,
    });

    res.status(200).json({
      message: "Product updated successfully.",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
};

// to delete the product

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(req.user.userId);

    const product = await Product.findOne({
      where: {
        id,
        organizationId: user.organizationId,
      },
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
      });
    }

    await product.destroy();

    res.status(200).json({
      message: "Product deleted successfully.",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
};