import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sequelize } from "./models/index.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("StockFlow Backend Running...");
});

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(async () => {
    console.log("Database connected successfully.");

    await sequelize.sync({ alter: true });

    console.log("Database synchronized successfully.");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed.");
    console.error(error);
  });
