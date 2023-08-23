import React from "react";
import { CardContainer, CardImage } from "./other_styles/card_style.js";

function Card({ partner, image }) {
  return (
    <CardContainer>
      <a href={partner}>
        <CardImage src={image} />
      </a>
    </CardContainer>
  );
}

export default Card;
