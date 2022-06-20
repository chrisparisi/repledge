import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1>Repledge</h1>
      </div>
      <div className="navbar__right">
        <ul>
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to="/login"
          >
            Member Login
          </Link>
          <li>Get Started Now</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
