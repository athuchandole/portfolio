// src/why/WhyThisPortfolio.js
import React from "react";
import './WhyThisPortfolio.css';  // Import the external CSS file
import image from '../assets/img.jpg'; // Import the image from assets folder

const WhyThisPortfolio = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Image Section */}
        <div className="col-image">
          <img
            src={image}
            alt="img"
            className="portfolio-img"
          />
        </div>
        
        {/* Text Content Section */}
        <div className="col-text">
          <h1 className="why_title p-2">Why This Portfolio?</h1>
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
      </div>
    </div>
  );
};

export default WhyThisPortfolio;
