import React, { useState } from "react";
import "./TabsAndPills.css";
import podcast1 from "../assets/Canva/P1.png";
import podcast2 from "../assets/Canva/P2.png";
import Edu1 from "../assets/Canva/E1.png";
import Edu2 from "../assets/Canva/E2.png";


const categories = [
  { name: "Podcasts", key: "podcasts" },
  { name: "Eductional", key: "Edu" },
  // { name: "Reels", key: "reels" },
  // { name: "Vlogs", key: "vlogs" },
  // { name: "Infotainment", key: "infotainment" },
];

const contentData = {
    podcasts: [
    { img: podcast1, title: "The Podcast That Doesn’t Exist" },
    { img: podcast2, title: "Comming Soon On YouTube" },
  ],
    Edu: [
    { img: Edu1, title: "How to Panic in the Stock Market" },
    { img: Edu2, title: "Edu 2" },
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

const TabsAndPills = () => {
  const [activeTab, setActiveTab] = useState("podcasts");

  return (
    <div className="tabs-container">
      <h2>Watch on YouTube</h2>
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
