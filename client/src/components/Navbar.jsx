import React from 'react'
import { useNavigate } from "react-router-dom";

import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h2>
          Stock<span>Flow</span>
        </h2>
      </div>

      <div className="navbar-right">
        <p className="organization-name">My Test Store</p>

        <div className="profile-avatar">R</div>
      </div>
    </header>
  );
};

export default Navbar;