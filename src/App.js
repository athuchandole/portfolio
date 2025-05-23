// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import Navbar from './nav/nav';
import Hero from './Hero/Hero';
import Alert from './Alert/Alert';
import WhyThisPortfolio from './why/WhyThisPortfolio';
import Heighlights from './Heighlights/PortfolioHighlights';
import FAQs from './faqs/FAQs';
import TabsAndPills from "./tabandpills/TabsAndPills";
import Youtubetwo from "./Youtubetwo/yt2";
import GoogleSearch from './google/google';
import Books from './books/Books';
// import Brands from './brands/Brands';
import ProjectApps from './projects/apps';
import Footer from "./Footer/footer";
import Art from './art/art';
import Arthero from './art/arthero/arthero';
import SocialMedia from './SocialMedia/SocialMedia';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/art" element={
            <div className="artroute">
              <Alert />
              <Arthero />
              <Art />
            </div>
          } />

        </Routes>


        {/* Route as per Github */}
        <div className="homeroute">
          <Alert />
          <Hero />
          <WhyThisPortfolio />
          <ProjectApps />
          <Heighlights />
          <Books />
          <SocialMedia />
          <TabsAndPills />
          <Youtubetwo />
          {/* <Brands /> */}
          <GoogleSearch />
          <FAQs />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
