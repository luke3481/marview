import {
  TemperatureLegendWrapper,
  ColorScale,
  StopLabel,
  LabelText,
} from "./legend_temp_style";

function TemperatureLegend() {
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

  return (
    <TemperatureLegendWrapper>
      <h3>Temperature</h3>
      <ColorScale>
        {temperatureStops.map((stop) => (
          <StopLabel key={stop.temp} style={{ backgroundColor: stop.color }}>
            <LabelText>{stop.temp}°C</LabelText>
          </StopLabel>
        ))}
      </ColorScale>
    </TemperatureLegendWrapper>
  );
}

export default TemperatureLegend;
