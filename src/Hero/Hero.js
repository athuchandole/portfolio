import React from "react";
import "./Hero.css";
import Heroimg from "../assets/MyAI/ai8.jpg";

const Hero = ({ theme }) => {
  return (
    <div className="hero-main">
      <div
        className="hero"
        style={{
          backgroundColor: theme.cardBackground,
          color: theme.text,
          transition: "all 0.3s ease",
        }}
      >
        <div className="hero-content">
          <p
            className="hero-mission"
            style={{ color: theme.mutedText }}
          >
            KNOW ABOUT Me
          </p>
          <h1>
            Hye there... I'm <br /> Atharv Chandole <br /> a{" "}
            <span
              className="highlight"
              style={{
                backgroundColor: theme.warning,
                color: theme.dark,
              }}
            >
              Web Developer
            </span>{" "}
            <br />
            Here is my{" "}
            <span
              className="highlight"
              style={{
                backgroundColor: theme.warning,
                color: theme.dark,
              }}
            >
              Portfolio
            </span>
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
