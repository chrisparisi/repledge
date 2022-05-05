import React from "react";
import Navbar from "../components/navbar/Navbar";

import "./home.scss";
import { images } from "../constants";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home__top">
          <div className="home__top-left">
            <img src={images.handtree} alt="hand holding tree" />
          </div>
          <div className="home__top-right">
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
