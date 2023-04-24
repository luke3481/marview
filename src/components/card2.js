import React from "react";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardBody,
} from "./card2_style.js";

function Card2({ title, body, image, width }) {
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

export default Card2;
