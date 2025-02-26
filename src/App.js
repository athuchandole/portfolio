// src/App.js
import React from 'react';
import './App.css';
import WhyThisPortfolio from './why/WhyThisPortfolio';
// import Alert from './Alert/Alert';
import FAQs from './faqs/FAQs';
import TabsAndPills from "./tabandpills/TabsAndPills";
// import Mentors from "./Mentors/Mentors";
// import Myself from "./Myself/Myself"
import StupidBox from "./stupidbox/StupidBox";
import Compo2 from "./compo2/Compo2";


function App() {
  return (
    <div className="App">
    {/* <Alert /> */}
{/* <Myself/> */}
      <WhyThisPortfolio />
      <Compo2 />
       <TabsAndPills />
       {/* <Mentors /> */}
    <FAQs />
    <StupidBox/>
    </div>
  );
}

export default App;
