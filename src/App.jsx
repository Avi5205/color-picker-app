import React, { useState } from "react";

import "./App.css";

function App() {
  const [background, setBackground] = useState("#fff");
  const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
  ];

  const handleColorChange = (color) => {
    setBackground(color);
  };
  return (
    <div style={{ background }} className="App">
      <h1>Color Picker</h1>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
      <div className="custom-color-picker">
        <input
          type="color"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default App;
