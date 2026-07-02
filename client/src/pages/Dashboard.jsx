import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <h1>Dashboard</h1>

          <p>Welcome back! Here's an overview of your inventory.</p>
        </main>
      </div>
    </>
  );
};

export default Dashboard;