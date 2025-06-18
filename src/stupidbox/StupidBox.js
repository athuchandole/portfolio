import { useState, useEffect } from "react";
import "./StupidBox.css"; // Import CSS file

const StupidBox = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      const timer = setTimeout(() => setIsOn(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOn]);

  return (
    <div className="stupid-box">
      <h1>Stupid Box</h1>
      <div className="toggle-container">
        <input 
          className="toggle-input" 
          type="checkbox" 
          checked={isOn}
          onChange={() => setIsOn(!isOn)} 
        />
        <div className="toggle-handle-wrapper">
          <div className="toggle-handle">
            <div className="toggle-handle-knob"></div>
            <div className="toggle-handle-bar-wrapper">
              <div className="toggle-handle-bar"></div>
            </div>
          </div>
        </div>
        <div className="toggle-base">
          <div className="toggle-base-inside"></div>
        </div>
      </div>
    </div>
  );
};

export default StupidBox;
