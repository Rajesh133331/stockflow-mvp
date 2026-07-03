import React, { useEffect, useState } from "react";

import api from "../api/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import SummaryCard from "../components/SummaryCard";
import LowStockTable from "../components/LowStockTable";

import "../styles/dashboard.css";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
      totalProducts: 0,
      totalQuantity: 0,
      lowStockItems: [],
    });

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");
    useEffect(() => {
      const fetchDashboard = async () => {
        try {
          const response = await api.get("/dashboard");

          setDashboardData(response.data);
        } catch (err) {
          setError(err.response?.data?.message || "Failed to load dashboard.");
        } finally {
          setLoading(false);
        }
      };

      fetchDashboard();
    }, []);
    if (loading) {
      return <h2>Loading Dashboard...</h2>;
    }
    if (error) {
      return <h2>{error}</h2>;
    }
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <h1>Dashboard</h1>

          <p className="welcome-text">
            Welcome back! Here's a quick overview of your inventory.
          </p>

          <div className="summary-container">
            <SummaryCard
              title="Total Products"
              value={dashboardData.totalProducts}
            />

            <SummaryCard
              title="Total Quantity"
              value={dashboardData.totalQuantity}
            />

            <SummaryCard
              title="Low Stock Items"
              value={dashboardData.lowStockItems.length}
            />
          </div>
          <LowStockTable products={dashboardData.lowStockItems} />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
