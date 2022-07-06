import React from 'react';
import { GiWaterRecycling, GiTreeGrowth } from 'react-icons/gi';

import './Charities.scss';

const Charities = () => {
  return (
    <div className="charities">
      <h2>Charities We Like</h2>
      <div className="charity__tree">
        <GiTreeGrowth />
      </div>
      <div className="charity__water">
        <GiWaterRecycling />
      </div>
    </div>
  );
};

export default Charities;
