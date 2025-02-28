import React, { useState } from "react";
import "./yt2.css"; // Updated CSS import
import podcast1 from "../assets/a1.png";
import podcast2 from "../assets/a1.png";

const categories = [
  { name: "Podcasts", key: "podcasts" },
  { name: "Branded Content", key: "branded" },
  // { name: "Reels", key: "reels" },
  // { name: "Vlogs", key: "vlogs" },
  // { name: "Infotainment", key: "infotainment" },
];

const contentData = {
    podcasts: [
    { img: podcast1, title: "Podcast 1" },
    { img: podcast2, title: "Podcast 2" },
  ],
  branded: [
    { img: "branded1.jpg", title: "Branded Content 1" },
    { img: "branded2.jpg", title: "Branded Content 2" },
  ],
  // reels: [
  //   { img: "reel1.jpg", title: "Reel 1" },
  //   { img: "reel2.jpg", title: "Reel 2" },
  // ],
  // vlogs: [
  //   { img: "vlog1.jpg", title: "Vlog 1" },
  //   { img: "vlog2.jpg", title: "Vlog 2" },
  // ],
  // infotainment: [
  //   { img: "infotainment1.jpg", title: "Infotainment 1" },
  //   { img: "infotainment2.jpg", title: "Infotainment 2" },
  // ],
};

const YT2TabsAndPills = () => {
  const [activeTab, setActiveTab] = useState("podcasts");

  return (
    <div className="yt2-tabs-container">
      <h2>Our Work</h2>
      <div className="yt2-tabs">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`yt2-tab-button ${activeTab === category.key ? "active" : ""}`}
            onClick={() => setActiveTab(category.key)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="yt2-content-grid">
        {contentData[activeTab].map((item, index) => (
          <div key={index} className="yt2-content-card">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YT2TabsAndPills;
