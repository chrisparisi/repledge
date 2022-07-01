import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Navbar.scss';
import { logout, reset as authReset } from '../../features/auth/authSlice';
import { reset as transactionReset } from '../../features/transactions/transactionSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(authReset());
    dispatch(transactionReset());
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
                <button>Get Started</button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
