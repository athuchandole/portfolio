import React, { useState } from "react";
import "./TabsAndPills.css";

const categories = [
  { name: "Podcasts", key: "podcasts" },
  { name: "Branded Content", key: "branded" },
  { name: "Reels", key: "reels" },
  { name: "Vlogs", key: "vlogs" },
  { name: "Infotainment", key: "infotainment" },
];

const contentData = {
  podcasts: [
    { img: "podcast1.jpg", title: "Podcast 1" },
    { img: "podcast2.jpg", title: "Podcast 2" },
  ],
  branded: [
    { img: "branded1.jpg", title: "Branded Content 1" },
    { img: "branded2.jpg", title: "Branded Content 2" },
  ],
  reels: [
    { img: "reel1.jpg", title: "Reel 1" },
    { img: "reel2.jpg", title: "Reel 2" },
  ],
  vlogs: [
    { img: "vlog1.jpg", title: "Vlog 1" },
    { img: "vlog2.jpg", title: "Vlog 2" },
  ],
  infotainment: [
    { img: "infotainment1.jpg", title: "Infotainment 1" },
    { img: "infotainment2.jpg", title: "Infotainment 2" },
  ],
};

const TabsAndPills = () => {
  const [activeTab, setActiveTab] = useState("podcasts");

  return (
    <div className="tabs-container">
      <h2>Our Work</h2>
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`tab-button ${activeTab === category.key ? "active" : ""}`}
            onClick={() => setActiveTab(category.key)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="content-grid">
        {contentData[activeTab].map((item, index) => (
          <div key={index} className="content-card">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsAndPills;
