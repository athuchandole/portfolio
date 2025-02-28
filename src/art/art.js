import React from "react";
import "./art.css";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Bookmark } from "lucide-react";

const Art = () => {
  const cards = [
    {
      title: "Aspiring Content Creators",
      image: "/images/content-creator.jpg",
    },
    {
      title: "Business Owners & Entrepreneurs",
      image: "/images/business-owner.jpg",
    },
    {
      title: "Experienced Professionals",
      image: "/images/experienced.jpg",
    },
    {
      title: "Social Media Managers/Marketers",
      image: "/images/social-media.jpg",
    },
    {
      title: "Anyone Who Wants To Showcase Their Skills",
      image: "/images/showcase.jpg",
    },
    {
      title: "And So Much More!",
      image: "/images/placeholder.jpg",
    },
  ];

  return (
    <div className="art-container">
      {cards.map((card, index) => (
        <div key={index} className="art-card">
          <h3>{card.title}</h3>
          <img src={card.image} alt={card.title} />
          <div className="art-actions">
            <Heart className="icon" />
            <MessageCircle className="icon" />
            <Bookmark className="icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Art;
