import React from "react";

import "../styles/ProductTable.css";
import { Link } from "react-router-dom";



const ProductTable = ({ products, onDelete }) => {
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
          {products.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-products">
                No products found.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.quantityOnHand}</td>
                <td>₹ {product.sellingPrice}</td>

                <td>
                  <span
                    className={
                      product.quantityOnHand <= product.lowStockThreshold
                        ? "low-stock"
                        : "in-stock"
                    }
                  >
                    {product.quantityOnHand <= product.lowStockThreshold
                      ? "Low Stock"
                      : "In Stock"}
                  </span>
                </td>

                <td>
                  <Link
                    to={`/products/edit/${product.id}`}
                    className="edit-btn"
                  >
                    Edit
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;