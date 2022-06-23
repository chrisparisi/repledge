import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import './Navbar.scss';
import { logout, reset } from '../../features/auth/authSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
          Repledge
        </Link>
      </div>
      <div className="navbar__right">
        {user ? (
          <button className="btn" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <ul>
            <li>
              <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to="/login"
              >
                Member Login
              </Link>
            </li>
            <li>
              <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to="/register"
              >
                Get Started
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
