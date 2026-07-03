import React from 'react'

import { NavLink, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (!confirmLogout) return;

    localStorage.removeItem("token");

    navigate("/");
  };
  return (
    <aside className="sidebar">
      <NavLink to="/dashboard" className="menu-item">
        Dashboard
      </NavLink>

      <NavLink to="/products" className="menu-item">
        Products
      </NavLink>

      <NavLink to="/settings" className="menu-item">
        Settings
      </NavLink>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;