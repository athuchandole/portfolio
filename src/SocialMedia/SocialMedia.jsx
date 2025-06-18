import React, { useState } from "react";
import "./SocialMedia.css";
import Twitter from "./imgs/x.png";
import SocialButton from "../components/SocialButton";

// Import actual icons
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const mediaData = [
    {
        media: "LinkedIn",
        image: Twitter,
        link: "https://www.linkedin.com/",
        icon: FaLinkedin,
        color: "#0077B5"
    },
    {
        media: "Twitter",
        image: Twitter,
        link: "https://twitter.com/",
        icon: FaTwitter,
        color: "#1DA1F2"
    },
    {
        media: "GitHub",
        image: Twitter,
        link: "https://github.com/",
        icon: FaGithub,
        color: "#333"
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
                    <div key={index} className="media-item">
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
                        <div className={`media-content-wrapper ${openIndex === index ? "open" : ""}`}>
                            <img src={item.image} alt={item.media} className="media-image" />
                            <SocialButton
                                icon={item.icon}
                                name={item.media}
                                url={item.link}
                                color={item.color}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;
