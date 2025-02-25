// src/App.js
import React from 'react';
import './App.css';
import WhyThisPortfolio from './why/WhyThisPortfolio';
import Alert from './Alert/Alert';
import FAQs from './faqs/FAQs';
import TabsAndPills from "./tabandpills/TabsAndPills";
import Mentors from "./Mentors/Mentors";

function App() {
  return (
    <div className="App">
    {/* <Alert /> */}
      <WhyThisPortfolio />
       <TabsAndPills />
       <Mentors />
    <FAQs />
    </div>
  );
}

export default App;
