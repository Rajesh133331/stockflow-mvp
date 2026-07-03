import React, { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/Dashboard.css";
import "../styles/Settings.css";
import "../styles/AddProduct.css";

const Settings = () => {
    const [settings, setSettings] = useState({
      defaultLowStockThreshold: "",
    });

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

    const [error, setError] = useState("");
    const fetchSettings = async () => {
      try {
        const response = await api.get("/settings");

        setSettings(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load settings.");
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchSettings();
    }, []);
    const handleChange = (e) => {
      setSettings({
        ...settings,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = async () => {
      try {
        setSaving(true);

        const response = await api.put("/settings", {
          defaultLowStockThreshold: Number(settings.defaultLowStockThreshold),
        });

        alert(response.data.message);
      } catch (err) {
        alert(err.response?.data?.message || "Failed to update settings.");
      } finally {
        setSaving(false);
      }
    };
    if (loading) {
      return <h2>Loading Settings...</h2>;
    }
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

              <input
                type="number"
                name="defaultLowStockThreshold"
                value={settings.defaultLowStockThreshold}
                onChange={handleChange}
              />
            </div>

            <button
              className="save-btn"
              onClick={handleSubmit}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Settings"}
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Settings;