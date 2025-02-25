import React from "react";
import "./Myself.css";
import mainImg from "../assets/img.jpg"; // Update with the actual image path
import img1 from "../assets/img.jpg";
import img2 from "../assets/img.jpg";

const Myself = () => {
  return (
    <div className="container">
      <div className="content">
        <h2>Hey,</h2>
        <h1>I'm Atharv Chandole</h1>
        <h3>aka Athuchandole</h3>
        <p>
          Welcome to <strong>BeerBiceps SkillHouse</strong>, where we're about to dive
          headfirst into the electrifying world of video editing. And guess what?
          I'm not alone in this adventure. I've got two of my partners in crime,
          <strong> Rajas Pardeshi</strong> and <strong>Akshat Tiwari</strong>, the absolute wizards of
          editing, right here with me. So buckle up, because things are about to
          get seriously awesome!
        </p>
      </div>
      <div className="image-section">
        <img src={mainImg} alt="Ranveer Allahbadia" className="main-img" />
        <img src={img1} alt="Team member 1" className="side-img" />
        <img src={img2} alt="Team member 2" className="side-img" />
      </div>
    </div>
  );
};

export default Myself;