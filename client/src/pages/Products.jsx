import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";
import api from "../api/api";

import "../styles/Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");
   const fetchProducts = async () => {
     try {
       setLoading(true);

       const response = await api.get("/products");

       setProducts(response.data);
     } catch (err) {
       setError(err.response?.data?.message || "Failed to load products.");
     } finally {
       setLoading(false);
     }
   };


    const handleDelete = async (id) => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?",
      );

      if (!confirmDelete) return;

      try {
        const response = await api.delete(`/products/${id}`);

        alert(response.data.message);

        fetchProducts();
      } catch (err) {
        alert(err.response?.data?.message || "Failed to delete product.");
      }
    };

   useEffect(() => {
     fetchProducts();
   }, []);
    if (loading) {
      return <h2>Loading Products...</h2>;
    }
    if (error) {
      return <h2>{error}</h2>;
    }
  return (
    <>
      <Navbar />

      <div className="products-layout">
        <Sidebar />

        <main className="products-content">
          <div className="products-header">
            <div>
              <h1>Products</h1>
              <p>Manage your inventory products.</p>
            </div>

            <Link to="/products/add" className="add-product-btn">
              + Add Product
            </Link>
          </div>

          <div className="search-container">
            <input type="text" placeholder="Search by Product Name or SKU" />
          </div>

          <ProductTable products={products} onDelete={handleDelete} />
        </main>
      </div>
    </>
  );
};

export default Products;