import {
  LegendContainer,
  LegendItem,
  LegendImage,
  LegendTitle,
} from "./legend_ais_style";
import ais_legend from "../imgs/ais_legend.png";

function AISLegend() {
  return (
    <LegendContainer>
      <LegendItem>
        <LegendTitle>Ship Type</LegendTitle>
        <LegendImage src={ais_legend} alt="Ship Type" />
      </LegendItem>
    </LegendContainer>
  );
}

export default AISLegend;
