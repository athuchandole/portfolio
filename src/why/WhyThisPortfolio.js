import React from "react";
import './WhyThisPortfolio.css';
import image from '../assets/img.jpg';

const WhyThisPortfolio = ({ theme }) => {
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
          <h1
            className="why_title p-2"
            style={{ color: theme.warning }}
          >
            Why This Portfolio?
          </h1>

          {[
            "SHOWCASE expertise and skills.",
            "ATTRACT potential clients and opportunities.",
            "DEMONSTRATE creativity and innovation.",
            "FOSTER continuous growth and improvement.",
            "ESTABLISH professional credibility.",
          ].map((text, i) => (
            <div
              key={i}
              className="pbg"
              style={{
                backgroundColor: theme.highlight,
                color: theme.text,
              }}
            >
              <i
                className="fa fa-check-circle"
                style={{ color: theme.info, marginRight: "10px" }}
              ></i>
              To <strong className="text-uppercase">{text}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyThisPortfolio;
