import React from "react";
import "../arthero/arthero.css";
import img from "../../assets/Canva/P2.png"

function Arthero() {
    return (
        <div className="arthero-container">
            {/* Left Section */}
            <div className="arthero-text-section">
                <span className="arthero-badge">CREATE, EXPLORE, INSPIRE</span>
                <h1 className="arthero-title">
                    FROM ART LOVER <br /> TO ART <span className="arthero-highlight">ARTIST</span>
                </h1>
                <p className="arthero-description">
                    Explore my collection of pencil sketches, drawings, and creative masterpieces. Join me on my artistic journey.
                </p>
                <button className="arthero-join-button">See My Artwork</button>
            </div>

            {/* Right Section */}
            <div className="arthero-image-section">
                <img
                    src={img} 
                    alt="Artistic Creations"
                    className="arthero-image" />
            </div>
        </div>
    );
}

export default Arthero;
