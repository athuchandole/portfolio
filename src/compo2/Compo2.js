import React from "react";
import "./Compo2.css";
import img from "./1.webp"

const Compo2 = () => {
  return (
    <div className="compo2-container">
      {/* Left Section - Text Content */}
      <div className="compo2-content">
        <h1>
          <span className="highlight">Get Access</span> To Everything <br /> At One Click!
        </h1>
        <p className="compo2-description">
          Download BeerBiceps Skillhouse app and get instant access to exclusive freebies
          that boost your content game.
        </p>
        <div className="compo2-buttons">
          <a href="#" className="compo2-playstore">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/200px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
            />
          </a>
          <a href="#" className="compo2-appstore">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </a>
        </div>
      </div>

      {/* Right Section - Mobile UI */}
      <div className="compo2-mobile-ui">
        <img src={img} alt="Mobile UI" className="compo2-mobile-image" />
      </div>
    </div>
  );
};

export default Compo2;
