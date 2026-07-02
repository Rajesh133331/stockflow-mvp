import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductTable from "../components/ProductTable";
import { Link } from "react-router-dom";

import "../styles/Products.css";

const Products = () => {
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

          <ProductTable />
        </main>
      </div>
    </>
  );
};

export default Products;