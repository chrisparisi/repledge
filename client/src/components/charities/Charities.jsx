import React from 'react';
import { GiWaterRecycling, GiTreeGrowth } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import './Charities.scss';

const Charities = () => {
  return (
    <div className="charities">
      <div className="summary">
        <h2>Charities We Like</h2>
        <p>
          We are not affiliated with any of the following charities, but like
          what they do and they each scored highly on Charity Navigator.
        </p>
      </div>
      <div className="charity__tree card">
        <GiTreeGrowth />
      </div>
      <div className="charity__water card">
        <GiWaterRecycling />
      </div>
    </div>
  );
};

export default Charities;
