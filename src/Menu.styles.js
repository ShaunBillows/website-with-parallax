import styled from "styled-components";

export const MenuContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const MenuItem = styled.div`
  color: white;
  cursor: pointer;
  display: block;
  font-family: "Ibarra Real Nova", serif;
  font-size: clamp(3rem, 8vw, 8rem);
  padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
  text-decoration: none;
  transition: opacity 400ms ease;
`;
export const BgPattern = styled.div`
  background-position: 0% ${(props) => props.bgPatternPosition}%;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 9%,
    transparent 9%
  );
  background-size: 12vmin 12vmin;
  height: 100vh;
  left: 0px;
  position: absolute;
  top: 0px;
  transition: opacity 800ms ease, background-size 800ms ease,
    background-position 800ms ease;
  width: 100vw;
  z-index: 1;
`;
export const BgImage = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center ${(props) => props.bgImagePosition}%;
  background-size: 110vmax;
  height: 100%;
  left: 0px;
  opacity: 0.15;
  position: absolute;
  top: 0px;
  transition: opacity 800ms ease, background-size 800ms ease,
    background-position 800ms ease;
  width: 100%;
  z-index: 0;
`;

export const MenuItems = styled.div`
  margin-left: clamp(4rem, 20vw, 48rem);
  position: relative;
  z-index: 2;
  &:hover ${MenuItem} {
    opacity: 0.3;
  }
  &:hover ${MenuItem}:hover {
    opacity: 1;
  }
  &:hover ~ ${BgPattern} {
    background-size: 11vmin 11vmin;
    opacity: 0.5;
  }
  &:hover ~ ${BgImage} {
    background-size: 100vmax;
    opacity: 0.1;
  }
`;
