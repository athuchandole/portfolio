// src/why/WhyThisPortfolio.js
import React from "react";
import './WhyThisPortfolio.css';
import image from '../assets/img.jpg'; // Import the image from assets folder

const WhyThisPortfolio = () => {
  return (
    <div className="row mt-5">
      <div className="col-2"></div>
      <div className="col-4 myimg text-center">
        <img
          src={image}
          alt="img"
          className="w-75 overflow-hidden"
          style={{ width: '100%', height: '100%', borderRadius: '25px' }}
        />
      </div>
      <div className="pbgbody col-4">
        <h1 className="text-info p-3">Why This Portfolio?</h1>
        <div className="pbg">
          <i className="fa fa-check-circle text-info"></i>
          To <strong className="text-uppercase"> SHOWCASE </strong> expertise and skills.
        </div>
        <div className="pbg">
          <i className="fa fa-check-circle text-info"></i>
          To <strong className="text-uppercase"> Attract </strong> potential clients and opportunities.
        </div>
        <div className="pbg">
          <i className="fa fa-check-circle text-info"></i>
          To <strong className="text-uppercase"> Demonstrate </strong> creativity and innovation.
        </div>
        <div className="pbg">
          <i className="fa fa-check-circle text-info"></i>
          To <strong className="text-uppercase"> Foster </strong> continuous growth and improvement.
        </div>
        <div className="pbg">
          <i className="fa fa-check-circle text-info"></i>
          To <strong className="text-uppercase"> Establish </strong> professional credibility.
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default WhyThisPortfolio;
