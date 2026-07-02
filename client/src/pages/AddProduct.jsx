import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/AddProduct.css";
import "../styles/dashboard.css";

const AddProduct = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <h1>Add Product</h1>

          <p>Fill in the product details below.</p>

          <form className="product-form">
            <div className="form-group">
              <label>Product Name</label>

              <input type="text" placeholder="Enter product name" />
            </div>

            <div className="form-group">
              <label>SKU</label>

              <input type="text" placeholder="Enter SKU" />
            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea rows="4" placeholder="Enter description"></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Quantity on Hand</label>

                <input type="number" placeholder="0" />
              </div>

              <div className="form-group">
                <label>Cost Price</label>

                <input type="number" placeholder="0.00" />
              </div>

              <div className="form-group">
                <label>Selling Price</label>

                <input type="number" placeholder="0.00" />
              </div>
            </div>

            <div className="form-group">
              <label>Low Stock Threshold</label>

              <input type="number" placeholder="5" />
            </div>

            <button type="submit" className="save-btn">
              Save Product
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default AddProduct;