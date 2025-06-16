// src/nav/nav.js
import React from 'react';
import './nav.css';
import ToggleBtn from '../components/ToggleBtn';

const Navbar = ({ darkMode, setDarkMode, theme }) => {
  return (
    <nav className="navbar" style={{ backgroundColor: theme.navbar }}>
      <div className="navbar-logo">
        <img src="/logo192.png" alt="Logo" height="30" />
      </div>
      <ToggleBtn darkMode={darkMode} setDarkMode={setDarkMode} />
    </nav>
  );
};

export default Navbar;
