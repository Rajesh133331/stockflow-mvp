import React from "react";

import "../styles/LowStockTable.css";

const lowStockProducts = [
  {
    id: 1,
    name: "Wireless Mouse",
    sku: "WM-101",
    quantity: 3,
    threshold: 5,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    sku: "MK-205",
    quantity: 2,
    threshold: 5,
  },
  {
    id: 3,
    name: "USB Hub",
    sku: "UH-310",
    quantity: 4,
    threshold: 5,
  },
];

const LowStockTable = () => {
  return (
    <div className="low-stock-card">
      <h2>Low Stock Items</h2>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Threshold</th>
          </tr>
        </thead>

        <tbody>
          {lowStockProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.quantity}</td>
              <td>{product.threshold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LowStockTable;