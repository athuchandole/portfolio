import React from "react";
import "./SocialButton.css";

const SocialButton = ({ icon: Icon, name, url, color }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={{ color }}
        >
            <Icon />
            {name}
        </a>
    );
};

export default SocialButton;
