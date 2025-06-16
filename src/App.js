// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import Navbar from './nav/nav';
import { lightTheme, darkTheme } from './theme/colorPalette';

import UserPersona from './UserPersona/UserPersona';
import Hello from './hello/hello';
import LogoCarousel from './logosc/LogoCarousel';
import Hero from './Hero/Hero';
import Alert from './Alert/Alert';
import WhyThisPortfolio from './why/WhyThisPortfolio';
import Heighlights from './Heighlights/PortfolioHighlights';
import FAQs from './faqs/FAQs';
import TabsAndPills from "./tabandpills/TabsAndPills";
import Youtubetwo from "./Youtubetwo/yt2";
import GoogleSearch from './google/google';
import Books from './books/Books';
import ProjectApps from './projects/apps';
import Footer from "./Footer/footer";
import Art from './art/art';
import Arthero from './art/arthero/arthero';
import SocialMedia from './SocialMedia/SocialMedia';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        minHeight: "100vh",
        transition: "all 0.3s ease"
      }}
    >
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />

        <Routes>
          <Route
            path="/art"
            element={
              <div className="artroute" style={{ backgroundColor: theme.cardBackground }}>
                <Alert />
                <Arthero />
                <Art />
              </div>
            }
          />
        </Routes>

        <div className="homeroute" style={{ backgroundColor: theme.background }}>
          <Alert />
          <Hero theme={theme} />
          <WhyThisPortfolio theme={theme} />
          <LogoCarousel theme={theme}/>
          <ProjectApps theme={theme} />
          <Heighlights />
          <Books />
          <SocialMedia />
          <TabsAndPills />
          <Youtubetwo />
          <GoogleSearch />
          <FAQs theme={theme} />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
