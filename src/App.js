// src/App.js
import React from 'react';
import './App.css';
import WhyThisPortfolio from './why/WhyThisPortfolio';
import Alert from './Alert/Alert';

function App() {
  return (
    <div className="App">
    <Alert />
      <WhyThisPortfolio />
    </div>
  );
}

export default App;
