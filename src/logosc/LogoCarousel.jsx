// src/components/LogoCarousel.jsx
import React from 'react';
import './LogoCarousel.css';

const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Gelo_logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1f/Android_logo_2019.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Android_robot.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/32/IOS_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
];


const LogoCarousel = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {[...logos, ...logos].map((logo, index) => (
                    <img key={index} src={logo} alt={`logo-${index}`} className="carousel-logo" />
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;
