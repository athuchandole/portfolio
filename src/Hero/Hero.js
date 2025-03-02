import React from "react";
import "./Hero.css";
import Heroimg from "../assets/MyAI/ai8.jpg"

const Hero = () => {
  return (
    <div className="hero-main">
    <div className="hero">
      <div className="hero-content">
        <p className="hero-mission">KNOW ABOUT Mentors</p>
        <h1>
          Hye there... I'm <br /> Atharv Chandole <br /> a
          <span className="highlight"> Web Developer </span>
        </h1>
      </div>
      <div className="hero-image">
        <img src={Heroimg} alt="Hero" />
      </div>
    </div>
    </div>
  );
};

export default Hero;
