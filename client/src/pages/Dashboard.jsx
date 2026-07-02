import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SummaryCard from "../components/SummaryCard";
import LowStockTable from "../components/LowStockTable";

import "../styles/Dashboard.css";

const Dashboard = () => {
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
            <SummaryCard title="Total Products" value="25" />

            <SummaryCard title="Total Quantity" value="1325" />

            <SummaryCard title="Low Stock Items" value="4" />
          </div>
          <LowStockTable />
        </main>
      </div>
    </>
  );
};

export default Dashboard;