import React from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/Dashboard.css";
import "../styles/AddProduct.css";

const EditProduct = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <button className="back-btn" onClick={() => navigate("/products")}>
            ← Back
          </button>

          <h1>Edit Product</h1>

          <p>Update the product details below.</p>

          <form className="product-form">
            <div className="form-group">
              <label>Product Name</label>

              <input type="text" defaultValue="Wireless Mouse" />
            </div>

            <div className="form-group">
              <label>SKU</label>

              <input type="text" defaultValue="WM-101" />
            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                rows="4"
                defaultValue="Wireless optical mouse"
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Quantity on Hand</label>

                <input type="number" defaultValue="20" />
              </div>

              <div className="form-group">
                <label>Cost Price</label>

                <input type="number" defaultValue="350" />
              </div>

              <div className="form-group">
                <label>Selling Price</label>

                <input type="number" defaultValue="599" />
              </div>
            </div>

            <div className="form-group">
              <label>Low Stock Threshold</label>

              <input type="number" defaultValue="5" />
            </div>

            <button type="submit" className="save-btn">
              Update Product
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default EditProduct;