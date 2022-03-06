import React, { useState } from "react";
import "./index.css";
import { Motion, spring, presets } from "react-motion";

export default function App() {
  const [startAnimation, setAnimation] = useState(false);
  const initialStyle = { opacity: 0, translateY: 30 };
  return (
    <div className="App">
      <Motion
        style={
          startAnimation
            ? {
                opacity: spring(1),
                translateY: spring(5, presets.wobbly)
              }
            : initialStyle
        }
      >
        {interpolatedStyles => (
          <div
            style={{
              transform: `translateY(${interpolatedStyles.translateY}px)`,
              opacity: interpolatedStyles.opacity
            }}
          >
            <h1>Triggered Animation</h1>
          </div>
        )}
      </Motion>
      <button onClick={() => setAnimation(true)}>Trigger Animation</button>
      <button onClick={() => setAnimation(false)}>Reset Animation</button>
    </div>
  );
}