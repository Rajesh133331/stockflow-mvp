import React from "react";

import "../styles/ProductTable.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    sku: "WM-101",
    quantity: 20,
    price: 599,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    sku: "MK-205",
    quantity: 3,
    price: 2499,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "USB Hub",
    sku: "UH-310",
    quantity: 12,
    price: 899,
    status: "In Stock",
  },
];

const ProductTable = () => {
  return (
    <div className="product-table-card">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Selling Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.quantity}</td>
              <td>₹ {product.price}</td>

              <td>
                <span
                  className={
                    product.status === "Low Stock" ? "low-stock" : "in-stock"
                  }
                >
                  {product.status}
                </span>
              </td>

              <td>
                <Link to={`/products/edit/${product.id}`} className="edit-btn">
                  Edit
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => {
                    const confirmDelete = window.confirm(
                      "Are you sure you want to delete this product?",
                    );

                    if (confirmDelete) {
                      alert("Product deleted successfully.");
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;