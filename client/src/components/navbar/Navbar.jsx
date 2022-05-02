import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1>Repledge</h1>
      </div>
      <div className="navbar__right">
        <ul>
          <li>Member Login</li>
          <li>Get Started Now</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
