import { Settings, User } from "../models/index.js";

export const getSettings = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId);

    const settings = await Settings.findOne({
      where: {
        organizationId: user.organizationId,
      },
    });

    res.status(200).json(settings);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
};

export const updateSettings = async (req, res) => {
  try {
    const { defaultLowStockThreshold } = req.body;

    const user = await User.findByPk(req.user.userId);

    let settings = await Settings.findOne({
      where: {
        organizationId: user.organizationId,
      },
    });

    if (!settings) {
      settings = await Settings.create({
        organizationId: user.organizationId,
        defaultLowStockThreshold,
      });
    } else {
      await settings.update({
        defaultLowStockThreshold,
      });
    }

    res.status(200).json({
      message: "Settings updated successfully.",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal server error.",
    });
  }
};
