import React from "react";
import "./footer.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import instagramIcon from "./insta.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <img src={instagramIcon} alt="Instagram Logo" className="footer-icon" />
                <h1>LET'S KEEP THE CONVERSATION GOING</h1>
                <p>
                    Got queries? We've got answers. Shoot us an email at{" "}
                    <a className="vmail" href="mailto:athuchandole@gmail.com">
                        athuchandole@gmail.com
                    </a>{" "}
                    and hey, stay updated by connecting with us on Instagram, YouTube &
                    LinkedIn.
                </p>
                <div className="social-buttons">
                    <a href="https://instagram.com/athuchandole" target="blank" className="social-btn instagram">
                        <FaInstagram /> Instagram
                    </a>
                    <a href="https://instagram.com/athuchandole" target="blank" className="social-btn youtube">
                        <FaYoutube /> YouTube
                    </a>
                    <a href="https://www.linkedin.com/in/athuchandole/" target="blank" className="social-btn linkedin">
                        <BsLinkedin /> LinkedIn
                    </a>
                </div>
            </div>
            <footer>
                <p>
                    <a href="#">Privacy Policy</a> | <a href="#">Terms Of Use</a> |{" "}
                    <a href="#">Refunds Policy</a>
                </p>
                <p>
                    Contact Us:{" "}
                    <a href="mailto:athuchandole@gmail.com">
                        athuchandole@gmail.com
                    </a>
                </p>
                <p>Copyright &copy; 2025 athuchandole. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;
