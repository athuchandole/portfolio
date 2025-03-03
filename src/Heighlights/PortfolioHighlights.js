import React from "react";
import "./PortfolioHighlights.css";

const highlights = [
  {
    icon: "💻",
    title: "Proven Project Strategies",
    description: "How to craft standout websites and applications with modern frameworks and tools.",
  },
  {
    "icon": "🛠️",
    "title": "Comprehensive Development Process",
    "description": "Learn how to streamline your design, coding, and deployment processes for efficiency."
},
{
    "icon": "🖥️",
    "title": "Advanced Tools & Techniques",
    "description": "Discover the latest development technologies, from responsive design to progressive web apps."
},
{
    "icon": "📈",
    "title": "Boost Client Acquisition",
    "description": "Effective strategies for showcasing your portfolio, pitching clients, and gaining new projects."
},
];

const PortfolioHighlights = () => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">
     I WANT TO SHOWCASE MY DEVELOPMENT <span>PORTFOLIO...</span>
      </h2>
      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <div key={index} className="highlight-card">
            <div className="highlight-icon">{item.icon}</div>
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-description">{item.description}</p>
          </div>
        ))}
      </div>
      <button className="cta-button">Start Monetising Your Content!</button>
    </div>
  );
};

export default PortfolioHighlights;
