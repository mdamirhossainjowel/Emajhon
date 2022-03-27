import React from "react";
import Shopping from "../../images/Shopping.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <p>Sale up to 70% off</p>
        <h2>New Collection For Fall</h2>
        <h5>Discover all the new arrivals of ready-to-wear collection.</h5>
        <button>Shop Now</button>
      </div>
      <div>
        <img src={Shopping} alt="" />
      </div>
    </div>
  );
};

export default Home;
