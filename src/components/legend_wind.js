import {
  TemperatureLegendWrapper,
  ColorScale,
  StopLabel,
  LabelText,
} from "./legend_wind_style";

function WindLegend() {
  const temperatureStops = [
    { temp: 1, color: "rgba(130, 87, 219, 1)" },
    { temp: 5, color: "rgba(32, 140, 236, 1)" },
    { temp: 15, color: "rgba(32, 196, 232, 1)" },
    { temp: 25, color: "rgba(35, 221, 221, 1)" },
    { temp: 50, color: "rgba(194, 255, 40, 1)" },
    { temp: 100, color: "rgba(255, 240, 40, 1)" },
    { temp: 200, color: "rgba(255, 194, 40, 1)" },
  ];

  return (
    <TemperatureLegendWrapper>
      <h3>Wind (m/s)</h3>
      <ColorScale>
        {temperatureStops.map((stop) => (
          <StopLabel key={stop.temp}>
            <LabelText>{stop.temp}</LabelText>
          </StopLabel>
        ))}
      </ColorScale>
    </TemperatureLegendWrapper>
  );
}

export default WindLegend;
