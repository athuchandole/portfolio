// UserPersona.jsx
import React from "react";
import "./UserPersona.css";

const UserPersona = () => {
    const user = {
        name: "Lucia Alvarez",
        role: "Photographer",
        age: "28",
        education: "B.A. in Visual Arts",
        location: "San Diego, CA",
        bio: "Lucia is a freelance photographer specializing in portraits and lifestyle shoots. She has a passion for storytelling through images and enjoys exploring new techniques.",
        goals: [
            "Expand her client base",
            "Launch an online photography course",
            "Grow her social media presence"
        ],
        motivations: [
            "Passion for visual storytelling",
            "Desire to be recognized in the photography community",
            "Love for creative freedom"
        ],
        concerns: [
            "Finding consistent work",
            "Balancing creative and business tasks",
            "Standing out in a saturated market"
        ]
    };

    return (
        <div className="persona-container">
            <div className="profile-section">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Lucia Alvarez"
                    className="profile-pic"
                />
                <h2>{user.name}</h2>
                <h3>{user.role}</h3>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Education:</strong> {user.education}</p>
                <p><strong>Location:</strong> {user.location}</p>
            </div>
            <div className="info-section">
                <div className="info-card">
                    <h4>Bio</h4>
                    <p>{user.bio}</p>
                </div>
                <div className="info-card">
                    <h4>Goals</h4>
                    <ul>
                        {user.goals.map((goal, index) => (
                            <li key={index}>{goal}</li>
                        ))}
                    </ul>
                </div>
                <div className="info-card">
                    <h4>Motivations</h4>
                    <ul>
                        {user.motivations.map((motivation, index) => (
                            <li key={index}>{motivation}</li>
                        ))}
                    </ul>
                </div>
                <div className="info-card">
                    <h4>Concerns</h4>
                    <ul>
                        {user.concerns.map((concern, index) => (
                            <li key={index}>{concern}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserPersona;