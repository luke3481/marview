import React from "react";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardBody,
} from "./other_styles/card_style.js";

function Card({ title, body, image, width }) {
  return (
    <CardContainer width={width}>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardBody>{body}</CardBody>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
