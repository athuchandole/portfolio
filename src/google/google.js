// src/google/google.js
import React, { useState } from "react";
import "./google.css";

const GoogleSearch = () => {
  const [query, setQuery] = useState("Atharv Chandole");

  const handleSearch = () => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  };

  return (
    <div className="container">
      <div className="search-box">
        <h1>Google Search</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search on Google
        </button>
      </div>
    </div>
  );
};

export default GoogleSearch;
