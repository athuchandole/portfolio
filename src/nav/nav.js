// src/nav/nav.js
import React from 'react';
import './nav.css';

const Navbar = ({ darkMode, setDarkMode, theme }) => {
  return (
    <nav className="navbar" style={{ backgroundColor: theme.navbar }}>
      <div className="navbar-logo">
        <img src="/logo192.png" alt="Logo" height="30" />
      </div>
      <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
