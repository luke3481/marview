import React, { useState } from "react";
import {
  PopupWrapper,
  PopupContent,
  CloseButton,
} from "./other_styles/popup_style.js";

function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <PopupWrapper>
        <PopupContent>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          <p>This is a demo. Huge updates coming soon!</p>
        </PopupContent>
      </PopupWrapper>
    )
  );
}

export default Popup;
