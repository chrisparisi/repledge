import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Dashboard.scss';
import Navbar from '../../components/navbar/Navbar';
import Link from '../../components/link/Link';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard__left">
          <Link />
        </div>
        <div className="dashboard__right"></div>
      </div>
    </div>
  );
};

export default Dashboard;
