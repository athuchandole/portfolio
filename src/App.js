// src/App.js
import React from 'react';
import './App.css';
// import Hero from './Hero/Hero';
import WhyThisPortfolio from './why/WhyThisPortfolio';
// import Alert from './Alert/Alert';
import FAQs from './faqs/FAQs';
import TabsAndPills from "./tabandpills/TabsAndPills";
import Youtubetwo from "./Youtubetwo/yt2";
// import Mentors from "./Mentors/Mentors";
// import Myself from "./Myself/Myself"
import StupidBox from "./stupidbox/StupidBox";
// import Compo2 from "./compo2/Compo2";
// import Books from './books/Books';

import Footer from "./Footer/footer";


function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
    {/* <Alert /> */}
{/* <Myself/> */}
      <WhyThisPortfolio />
      {/* <Books/> */}
      <StupidBox/>
      {/* <Compo2 /> */}
       <TabsAndPills />
       <Youtubetwo/>
       {/* <Mentors /> */}
    <FAQs />
    <Footer />
    </div>
  );
}

export default App;
