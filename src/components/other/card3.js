import React from "react";
import {
  CardContainer,
  Headshot,
  Name,
  Position,
  Description,
  LinkedInIcon
} from "./other_styles/card3_style.js";

function Card3({ image, name, position, description, linkedinUrl }) {
 return (
   <CardContainer>
     <Headshot src={image} alt={`${name}'s headshot`} />
     <Name>{name} </Name>
     <Position>{position} </Position>
     <Description>{description}</Description>
     <LinkedInIcon href={linkedinUrl} target="_blank" rel="noopener noreferrer">
       <i className="fab fa-linkedin"></i>
     </LinkedInIcon>
   </CardContainer>
 );
}

export default Card3;
