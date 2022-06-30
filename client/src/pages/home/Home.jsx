import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GiFruitTree } from 'react-icons/gi';

import './home.scss';
import { images } from '../../constants';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="home">
          <div className="home__top-container">
            {/* <img src={images.handtree} alt="hand holding tree" /> */}
            <GiFruitTree />
            <h2 className="home__header">Round Up and Offset</h2>
            <p>
              Repledge helps you round up your purchases that may have increased
              your carbon footprint and donate to causes that offset it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
