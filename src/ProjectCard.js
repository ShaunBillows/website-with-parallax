import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faForward, faBackward, faOtter } from "@fortawesome/free-solid-svg-icons";

export const ProjectCard = ({ image, title, description}) => {

    const [mousePos, setMousePos] = useState({x: 0,y: 0});

    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});


    function handleMouseMove ( event ) {
      var bounds = event.target.getBoundingClientRect();
      var x = event.clientX - bounds.left;
      var y = event.clientY - bounds.top;
      setMousePos({
        x: x,
        y: y,
       });
      return {x: x, y: y};
    }
  
    return (
      <>
    <Card className="card" style={{background: `radial-gradient(
      800px circle at ${mousePos.x}px ${mousePos.y}px, 
      rgba(255, 255, 255, 1),
      transparent 40%`
    }} onMouseMove={handleMouseMove}>
    <Content className="card-content" >
          <Test>     </Test>
      <CardImage className="carage" >
      </CardImage>
      <CardInfoWrapper className="card-info-wrapper" >
        <CardInfo className="card-info">
          <i>            <FontAwesomeIcon icon={faForward}/></i>
          <CardInfoTitle className="card-info-title">
            <h3>{title}</h3>  
            {/* <div>{ `(${mousePos.x}, ${mousePos.y})`}</div>             */}
            <h4>project description</h4>
          </CardInfoTitle>    
        </CardInfo>
      </CardInfoWrapper>
            {/* <div className="card-image">
        <i className="fa-duotone fa-blender-phone"></i>
      </div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <i className="fa-duotone fa-blender-phone"></i>
          <div className="card-info-title">
            <h3>Blender Phones</h3>  
            <h4>These absolutely deserve to exist.</h4>
          </div>    
        </div>
      </div> */}

    </Content>
  </Card>
      </>
    );
  };
  const Test  = styled.div`
  position: absolute;
  background-color: rgba(120, 1, 1, 0.01);
  text-align: center;
  width: 95%;
  height: 95%;
  z-index: 100;
  align-items: center;
    display: flex;
    justify-content: center;
  ` 
  
const CardInfoWrapper = styled.div`

  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: rgb(240, 240, 240);

      align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    padding: 0px 20px;
    position: absolute;
    
    height: 260px;
    padding-top: 120px;
    text-align: start;

`
const CardImage = styled.div`
  /* position: relative; */
  align-items: center;
    display: flex;
    height: 140px;
    justify-content: center;
    overflow: hidden;
    /* position: absolute; */
    width: 280px;
`

const CardInfo = styled.div`
  /* width: 100%; */
  align-items: flex-start;
    display: flex;
    gap: 10px;
    /* width: 120px; */
    /* position: relative; */
`
const CardInfoTitle = styled.div`
  /* position: absolute; */
`
const Icon = styled.div`
/* width: 100px;
height: 100px;
outline: 3px solid red; */
`

  const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 260px;
  flex-direction: column;
  position: relative; 
  width: 300px;  
  &::before {
  background: radial-gradient(
     600px circle at 100px 100px, 
     rgba(255, 255, 255, 0.06),
     transparent 40%
   );
  border-radius: inherit;
  content: "";
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
  z-index: 2;
}

&::after {
  background: radial-gradient(
     600px circle at 100px 100px, 
     rgba(255, 255, 255, 0.4),
     transparent 40%
   );
  border-radius: inherit;
  content: "";
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
  z-index: 1;
}

&:hover::before {
    opacity: 1;
  }
` 

const Content = styled.div`
    background-color: var(--card-color);
    &:hover {
      background-color: rgb(23, 23, 23, 0.95);
      /* background-color: var(--card-color); */
    }
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    inset: 0px;
    &:hover {
      inset: 0.3px;
    }
    padding: 10px;
    position: absolute;
    z-index: 2;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);


`