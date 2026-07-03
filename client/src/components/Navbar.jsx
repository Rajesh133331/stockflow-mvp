import React from "react";

import "../styles/navbar.css";

const Navbar = () => {
  const organizationName =
    localStorage.getItem("organizationName") || "Organization";

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <h2>
          Stock<span>Flow</span>
        </h2>
      </div>

      <div className="navbar-right">
        <p className="organization-name">{organizationName}</p>

        <div className="profile-avatar">
          {organizationName.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
