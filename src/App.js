// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import Navbar from './nav/nav';
import { lightTheme, darkTheme } from './theme/colorPalette';
import FadeInGroup from './utils/FadeInGroup';

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
  const [darkMode, setDarkMode] = useState(true);
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
          {/* Redirect root to /portfolio */}
          <Route path="/" element={<Navigate to="/portfolio" replace />} />

          {/* /art route */}
          <Route
            path="/art"
            element={
              <div className="artroute" style={{ backgroundColor: theme.cardBackground }}>
                <FadeInGroup>
                  <Alert />
                  <Arthero />
                  <Art />
                </FadeInGroup>
              </div>
            }
          />

          {/* /projects route */}
          <Route
            path="/projects"
            element={
              <div className="projectroute" style={{ backgroundColor: theme.background }}>
                <ProjectApps theme={theme} />
              </div>
            }
          />

          {/* /portfolio route (homepage) */}
          <Route
            path="/portfolio"
            element={
              <div className="homeroute" style={{ backgroundColor: theme.background }}>
                <FadeInGroup>
                  <Alert />
                  <Hero theme={theme} />
                  <WhyThisPortfolio theme={theme} />
                  <LogoCarousel theme={theme} />
                  <ProjectApps theme={theme} />
                  {/* <Heighlights /> */}
                  <Books />
                  <SocialMedia />
                  <TabsAndPills />
                  <Youtubetwo />
                  <GoogleSearch />
                  <FAQs theme={theme} />
                  <Footer />
                </FadeInGroup>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
