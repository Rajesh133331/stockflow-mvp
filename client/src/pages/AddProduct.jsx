import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

import api from "../api/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/AddProduct.css";
import "../styles/dashboard.css";

const AddProduct = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: "",
      sku: "",
      description: "",
      quantityOnHand: "",
      costPrice: "",
      sellingPrice: "",
      lowStockThreshold: "",
    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();

      setError("");

      if (
        !formData.name ||
        !formData.sku ||
        !formData.quantityOnHand ||
        !formData.costPrice ||
        !formData.sellingPrice ||
        !formData.lowStockThreshold
      ) {
        setError("Please fill in all required fields.");
        return;
      }

      try {
        setLoading(true);

        const response = await api.post("/products", {
          ...formData,
          quantityOnHand: Number(formData.quantityOnHand),
          costPrice: Number(formData.costPrice),
          sellingPrice: Number(formData.sellingPrice),
          lowStockThreshold: Number(formData.lowStockThreshold),
        });

        alert(response.data.message);

        navigate("/products");
      } catch (err) {
        setError(err.response?.data?.message || "Failed to add product.");
      } finally {
        setLoading(false);
      }
    };
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <h1>Add Product</h1>

          <p>Fill in the product details below.</p>

          <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>SKU</label>

              <input
                type="text"
                name="sku"
                placeholder="Enter SKU"
                value={formData.sku}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                rows="4"
                name="description"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Quantity on Hand</label>

                <input
                  type="number"
                  name="quantityOnHand"
                  placeholder="0"
                  value={formData.quantityOnHand}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Cost Price</label>
                <input
                  type="number"
                  name="costPrice"
                  placeholder="0.00"
                  value={formData.costPrice}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Selling Price</label>

                <input
                  type="number"
                  name="sellingPrice"
                  placeholder="0.00"
                  value={formData.sellingPrice}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Low Stock Threshold</label>

              <input
                type="number"
                name="lowStockThreshold"
                placeholder="5"
                value={formData.lowStockThreshold}
                onChange={handleChange}
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="save-btn" disabled={loading}>
              {loading ? "Saving..." : "Save Product"}
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default AddProduct;