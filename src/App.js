import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';

// import Hero from './Hero/Hero';
import WhyThisPortfolio from './why/WhyThisPortfolio';
import Alert from './Alert/Alert';
import FAQs from './faqs/FAQs';
import TabsAndPills from "./tabandpills/TabsAndPills";
import Youtubetwo from "./Youtubetwo/yt2";
// import Mentors from "./Mentors/Mentors";
// import Myself from "./Myself/Myself"
// import StupidBox from "./stupidbox/StupidBox";
// import Compo2 from "./compo2/Compo2";
import Books from './books/Books';
import Brands from './brands/Brands'; 

import Footer from "./Footer/footer";
import Art from "./art/art";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Hero /> */}
        {/* <Alert /> */}
        {/*<Myself/> */}
        <WhyThisPortfolio />
        <Books/>
        {/* <StupidBox /> */}
        {/* <Compo2 /> */}
        <TabsAndPills />
        <Youtubetwo />

        {/* <Mentors /> */}
        <Brands/>
        <FAQs />
        <Footer />
        <Routes>
          <Route path="/arts" element={<Art />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
