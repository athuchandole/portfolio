import React from "react";
import "./footer.css";
import {
    FaInstagram,
    FaYoutube,
    FaFacebook,
    FaTwitter,
    FaTelegram,
    FaSnapchatGhost,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiThreads } from "react-icons/si";
import instagramIcon from "./insta.png";
import SocialButton from "../components/SocialButton";

const Footer = () => {
    const socialLinks = [
        {
            icon: FaInstagram,
            name: "Instagram",
            url: "https://instagram.com/athuchandole",
            color: "#e1306c",
        },
        {
            icon: FaYoutube,
            name: "YouTube",
            url: "https://youtube.com/@athuchandole",
            color: "#ff0000",
        },
        {
            icon: BsLinkedin,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/athuchandole/",
            color: "#0077b5",
        },
        {
            icon: FaFacebook,
            name: "Facebook",
            url: "https://facebook.com/athuchandole",
            color: "#1877f2",
        },
        {
            icon: FaTwitter,
            name: "Twitter",
            url: "https://twitter.com/athuchandole",
            color: "#1da1f2",
        },
        {
            icon: SiThreads,
            name: "Threads",
            url: "https://threads.net/@athuchandole",
            color: "#000000",
        },
        {
            icon: FaSnapchatGhost,
            name: "Snapchat",
            url: "https://snapchat.com/add/athuchandole",
            color: "#fffc00",
        },
        {
            icon: FaTelegram,
            name: "Telegram",
            url: "https://t.me/athuchandole",
            color: "#0088cc",
        },
    ];

    return (
        <div className="footer-container">
            <div className="footer-content">
                <img
                    src={instagramIcon}
                    alt="Instagram Logo"
                    className="footer-icon"
                />
                <h1>LET'S KEEP THE CONVERSATION GOING</h1>
                <p>
                    Got queries? We've got answers. Shoot us an email at{" "}
                    <a className="vmail" href="mailto:athuchandole@gmail.com">
                        athuchandole@gmail.com
                    </a>{" "}
                    and hey, stay updated by connecting with us on social media.
                </p>
                <div className="social-buttons">
                    {socialLinks.map(({ icon, name, url, color }) => (
                        <SocialButton
                            key={name}
                            icon={icon}
                            name={name}
                            url={url}
                            color={color}
                        />
                    ))}
                </div>
            </div>
            <footer>
                <p>
                    <a href="#">Privacy Policy</a> | <a href="#">Terms Of Use</a> |{" "}
                    <a href="#">Refunds Policy</a>
                </p>
                <p>
                    Contact Us:{" "}
                    <a href="mailto:athuchandole@gmail.com">athuchandole@gmail.com</a>
                </p>
                <p>&copy; 2025 athuchandole. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;
