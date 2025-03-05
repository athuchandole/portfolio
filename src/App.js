// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes and Route
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import Navbar from './nav/nav'; // Import Navbar
import Hero from './Hero/Hero';
import WhyThisPortfolio from './why/WhyThisPortfolio';
import Heighlights from './Heighlights/PortfolioHighlights'
import FAQs from './faqs/FAQs';
import TabsAndPills from "./tabandpills/TabsAndPills";
import Youtubetwo from "./Youtubetwo/yt2";
import GoogleSearch from './google/google';
import Books from './books/Books';
// import Brands from './brands/Brands';
import ProjectApps from './projects/apps';
import Footer from "./Footer/footer";
import Hello from './hello/hello'; // Import Hello component
import Art from './art/art';
import Arthero from './art/arthero/arthero';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add Navbar */}
        <Routes>
          {/* Route for Hello component */}
          <Route path="/hii" element={<Hello />} />
          <Route path="/art" element={
            <>
              <div className='artroute'>
                <Arthero />
                <Art />
              </div>
            </>
          } />

          {/* Default Route (everything else goes here) */}

          <Route path="/" element={
            <>
              <div className='homeroute'>
                <Hero />
                <WhyThisPortfolio />
                <ProjectApps />
                <Heighlights />
                <Books />
                <TabsAndPills />
                <Youtubetwo />
                {/* <Brands /> */}
                <GoogleSearch/>
                <FAQs />
              </div>
            </>
          } />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
