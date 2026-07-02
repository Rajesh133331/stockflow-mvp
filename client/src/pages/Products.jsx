import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductTable from "../components/ProductTable";

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

            <button className="add-product-btn">+ Add Product</button>
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