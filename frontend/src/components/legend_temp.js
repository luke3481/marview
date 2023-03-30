import React from "react";
import "./templegend_style.css";

const temperatureStops = [
  { temp: -30, color: "rgba(130, 87, 219, 1)" },
  { temp: -20, color: "rgba(32, 140, 236, 1)" },
  { temp: -10, color: "rgba(32, 196, 232, 1)" },
  { temp: 0, color: "rgba(35, 221, 221, 1)" },
  { temp: 10, color: "rgba(194, 255, 40, 1)" },
  { temp: 20, color: "rgba(255, 240, 40, 1)" },
  { temp: 25, color: "rgba(255, 194, 40, 1)" },
  { temp: 30, color: "rgba(252, 128, 20, 1)" },
];

function TemperatureLegend() {
  return (
    <div className="temperature-legend">
      <h3>Temperature</h3>
      <div className="color-scale">
        {temperatureStops.map((stop) => (
          <div
            key={stop.temp}
            className="stop-label"
            style={{ backgroundColor: stop.color }}
          >
            <span className="label-text">{stop.temp}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemperatureLegend;
