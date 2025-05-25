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
    <div className="App" style={{ background: theme.background, color: theme.text }}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />
        <Routes>
          <Route path="/art" element={
            <div className="artroute">
              <Alert />
              <Arthero />
              <Art />
            </div>
          } />
        </Routes>

        <div className="homeroute">
          <Alert />
          <Hero />
          <WhyThisPortfolio />
          <LogoCarousel />
          <ProjectApps theme={theme} />
          <Heighlights />
          <Books />
          <SocialMedia />
          <TabsAndPills />
          <Youtubetwo />
          <GoogleSearch />
          <FAQs />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
