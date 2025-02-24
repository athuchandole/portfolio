import React, { useState } from "react";
import "./Mentors.css";

const mentors = [
  { name: "Salil Jamdar", title: "Actor | Writer | Singer", img: "mentor1.jpg", bg: "#f4a949" },
  { name: "Manish Pandey", title: "Chief Executive Officer", img: "mentor2.jpg", bg: "#6eb3d0" },
  { name: "Nachiket Nisal", title: "Chief Operating Officer", img: "mentor3.jpg", bg: "#f5b37f" },
  { name: "Akshat Tiwari", title: "Head Video Editor", img: "mentor4.jpg", bg: "#40d1b0" },
  { name: "Rajas Pardeshi", title: "Head of Production", img: "mentor5.jpg", bg: "#e74c3c" },
  { name: "Mahima Thakar", title: "Head of Content", img: "mentor6.jpg", bg: "#f8a5c2" },
];

const Mentors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mentors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mentors.length) % mentors.length);
  };

  return (
    <div className="mentors-container">
      <h2 className="mentors-title">
        Meet Your <span className="highlight">Mentors</span>
      </h2>

      {/* Desktop & Tablet View */}
      <div className="mentors-grid">
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card" style={{ background: mentor.bg }}>
            <img src={mentor.img} alt={mentor.name} />
            <div className="mentor-info">
              <h3>{mentor.name}</h3>
              <p>{mentor.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="mentors-carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
        <div className="carousel-card" style={{ background: mentors[currentIndex].bg }}>
          <img src={mentors[currentIndex].img} alt={mentors[currentIndex].name} />
          <div className="mentor-info">
            <h3>{mentors[currentIndex].name}</h3>
            <p>{mentors[currentIndex].title}</p>
          </div>
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default Mentors;
