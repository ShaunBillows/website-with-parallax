import { useState } from "react";
import styled from "styled-components";
import bg from "./assets/bg.jpg";
import image from "./assets/sat.png";
import {
  MenuContainer,
  MenuItem,
  BgPattern,
  BgImage,
  MenuItems,
} from "./Menu.styles";

export const Menu = ({ setOpenModal, openModal }) => {
  const [bgPatternPosition, setBgPatternPosition] = useState(0);
  const [bgImagePosition, setBgImagePosition] = useState(45);

  const handleHover = (bgPattern, bgPosition) => {
    setBgPatternPosition(bgPattern);
    setBgImagePosition(bgPosition);
  };

  return (
    <MenuContainer id="menu" onClick={() => openModal && setOpenModal(false)}>
      <MenuItems id="menu-items" openModal={openModal}>
        <MenuItem
          className="menu-item"
          onMouseOver={() => handleHover(0, 45)}
          onClick={() => setOpenModal(true)}
        >
          Home
        </MenuItem>
        <MenuItem className="menu-item" onMouseOver={() => handleHover(25, 50)}>
          About
        </MenuItem>
        <MenuItem className="menu-item" onMouseOver={() => handleHover(50, 55)}>
          Store
        </MenuItem>
        <MenuItem className="menu-item" onMouseOver={() => handleHover(75, 60)}>
          Contact
        </MenuItem>
      </MenuItems>
      <BgPattern
        image={image}
        bgPatternPosition={bgPatternPosition}
        id="menu-background-pattern"
      ></BgPattern>
      <BgImage
        bg={bg}
        bgImagePosition={bgImagePosition}
        id="menu-background-image"
      ></BgImage>
    </MenuContainer>
  );
};
