import React from 'react'

import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <NavLink
        to="/dashboard"
        className="menu-item"
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/products"
        className="menu-item"
      >
        Products
      </NavLink>

      <NavLink
        to="/settings"
        className="menu-item"
      >
        Settings
      </NavLink>

      <button className="logout-btn">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;