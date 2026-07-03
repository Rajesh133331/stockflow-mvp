import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import api from "../api/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";

import "../styles/dashboard.css";
import "../styles/AddProduct.css";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    description: "",
    quantityOnHand: "",
    costPrice: "",
    sellingPrice: "",
    lowStockThreshold: "",
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get("/products");

        const product = response.data.find((item) => item.id === Number(id));

        if (!product) {
          setError("Product not found.");
          return;
        }

        setFormData(product);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setUpdating(true);

      const response = await api.put(`/products/${id}`, {
        ...formData,
        quantityOnHand: Number(formData.quantityOnHand),
        costPrice: Number(formData.costPrice),
        sellingPrice: Number(formData.sellingPrice),
        lowStockThreshold: Number(formData.lowStockThreshold),
      });

      alert(response.data.message);

      navigate("/products");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update product.");
    } finally {
      setUpdating(false);
    }
  };

  if (error) {
    return <h2>{error}</h2>;
  }

  if (loading) {
    return <h2>Loading Product...</h2>;
  }

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

          <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>SKU</label>

              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                rows="4"
                name="description"
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
                  value={formData.quantityOnHand}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Cost Price</label>

                <input
                  type="number"
                  name="costPrice"
                  value={formData.costPrice}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Selling Price</label>

                <input
                  type="number"
                  name="sellingPrice"
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
                value={formData.lowStockThreshold}
                onChange={handleChange}
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="save-btn" disabled={updating}>
              {updating ? "Updating..." : "Update Product"}
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default EditProduct;