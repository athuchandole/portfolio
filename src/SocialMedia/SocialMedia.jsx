import React, { useState, useRef } from "react";
import "./SocialMedia.css";
import Twitter from "./imgs/x.png";

const mediaData = [
    {
        media: "LinkedIn",
        image: Twitter,
        link: "https://www.linkedin.com/"
    },
    {
        media: "Twitter",
        image: Twitter,
        link: "https://twitter.com/"
    },
    {
        media: "GitHub",
        image: Twitter,
        link: "https://github.com/"
    }
];

const SocialMedia = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="media-container">
            <h2 className="media-title">Social Media</h2>
            <p className="media-subtitle">Stay connected on your favorite platforms</p>
            <div className="media-list">
                {mediaData.map((item, index) => (
                    <div
                        key={index}
                        className="media-item"
                    >
                        <button
                            className="media-button"
                            onClick={() =>
                                setOpenIndex((prev) => (prev === index ? null : index))
                            }
                        >
                            {item.media}
                            <span className={`media-icon ${openIndex === index ? "open" : ""}`}>
                                ▼
                            </span>
                        </button>
                        <div
                            className={`media-content-wrapper ${openIndex === index ? "open" : ""}`}
                        >
                            <img src={item.image} alt={item.media} className="media-image" />
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <button className="media-visit-button">Visit</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;
