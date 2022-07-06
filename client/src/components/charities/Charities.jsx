import React from 'react';
import { GiWaterRecycling, GiTreeGrowth } from 'react-icons/gi';

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
        <h2>One Tree Planted</h2>
        <p>
          Plant pollution-removing trees and recreate habitation for wildlife
        </p>
        <button className="btn btn-block">
          <a
            href="https://onetreeplanted.org/products/plant-trees"
            target="_blank"
            rel="noreferrer"
          >
            Donate
          </a>
        </button>
      </div>
      <div className="charity__water card">
        <GiWaterRecycling />
        <h2>Ocean Conservancy</h2>
        <p>
          Clean our oceans of microplastics and stop mass-extinctions of aquatic
          life
        </p>
        <button className="btn btn-block">
          <a
            href="https://donate.oceanconservancy.org/page/92465/donate/1?promo_name=Donate_Button&promo_position=TopRight&promo_creative=Evergreen&_ga=2.218722137.13233620.1657145428-69429770.1657145428&ea.tracking.id=22OPGPEAXX"
            target="_blank"
            rel="noreferrer"
          >
            Donate
          </a>
        </button>
      </div>
    </div>
  );
};

export default Charities;
