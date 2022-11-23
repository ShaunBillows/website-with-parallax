import { useState } from "react";
import styled from "styled-components";
import bg from "./assets/bg.jpg";
import {
  MenuContainer,
  MenuItem,
  BgPattern,
  BgImage,
  MenuItems,
} from "./Menu.styles";

export const Menu = ({ setOpenModal, openModal, setModalContent }) => {
  const [bgPatternPosition, setBgPatternPosition] = useState(0);
  const [bgImagePosition, setBgImagePosition] = useState(45);

  const handleHover = (bgPattern, bgPosition) => {
    setBgPatternPosition(bgPattern);
    setBgImagePosition(bgPosition);
  };

  const handleSetModalContent = (content) => {
    setModalContent(content)
    setOpenModal(true)
  }

  return (
    <MenuContainer id="menu" onClick={() => openModal && setOpenModal(false)}>
      <MenuItems id="menu-items" openModal={openModal}>
        <MenuItem
          className="menu-item"
          onMouseOver={() => handleHover(0, 45)}
          onClick={() => handleSetModalContent("About")}
        >
          About
        </MenuItem>
        <MenuItem className="menu-item" onMouseOver={() => handleHover(25, 50)} onClick={() => handleSetModalContent("Projects")}>
        Projects
        </MenuItem>
        <MenuItem className="menu-item" onMouseOver={() => handleHover(50, 55)} onClick={() => handleSetModalContent("Contact")}>
          Contact
        </MenuItem>
      </MenuItems>
      <BgPattern
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
