import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/Dashboard.css";
import "../styles/settings.css";
import "../styles/AddProduct.css";

const Settings = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <h1>Settings</h1>

          <p>Manage your inventory settings.</p>

          <div className="settings-card">
            <h2>Inventory Settings</h2>

            <div className="form-group">
              <label>Default Low Stock Threshold</label>

              <input type="number" defaultValue="5" />
            </div>

            <button className="save-btn">Save Settings</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Settings;