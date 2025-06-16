// src/utils/FadeInSection.jsx
import React, { useRef, useEffect, useState } from "react";
import "../animations.css"; // make sure path is correct

const FadeInSection = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const current = domRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
