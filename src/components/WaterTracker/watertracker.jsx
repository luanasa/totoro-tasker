import React, { useState } from 'react';
import './watertracker.css';
import BackArrow from '../BackArrow/backarrow';

function WaterTracker() {
  const [svgCount, setSvgCount] = useState(1); 
  const [mlConsumed, setMlConsumed] = useState(0); 

  const handleAddition = () => {
    const mlToAdd = 500;
    const newMlConsumed = mlConsumed + mlToAdd;
    if (newMlConsumed <= 2000) { 
      setSvgCount(svgCount + 1); 
      setMlConsumed(newMlConsumed); 
    }
  };

  const isButtonDisabled = mlConsumed >= 2000; 

  return (
    <div className="tracker_container">
      <BackArrow url="/" />
      <h1>Daily Water Tracker</h1>
      <div className="bottle_container">
        {[...Array(svgCount)].map((_, index) => (
          <img key={index} src="./bottle.svg" alt="" /> 
        ))}
      </div>
      <div className="btn_tracker">
        <button onClick={handleAddition} disabled={isButtonDisabled}>Add 500ml</button>
        <span>Total consumed: {mlConsumed / 1000}L</span> 
      </div>
    </div>
  );
}

export default WaterTracker;
