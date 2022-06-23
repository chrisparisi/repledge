import React from 'react';

import './Dashboard.scss';
import Navbar from '../../components/navbar/Navbar';
import Link from '../../components/link/Link';

const Dashboard = () => {
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
