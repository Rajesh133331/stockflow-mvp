import React from "react";

import "../styles/LowStockTable.css";

const LowStockTable = ({ products }) => {
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
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.quantityOnHand}</td>
                <td>{product.lowStockThreshold}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No low stock products.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LowStockTable;
