// src/nav/nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';  // Import the styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/hii" className="navbar-link">Hello</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
