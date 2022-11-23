import styled from "styled-components";
import "./Cards.css"
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

    const pos = 100
    const [mousePos, setMousePos] = useState({x: pos,y: pos});

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {

  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, []);


    // const [mousePos, setMousePos] = useState({x: pos,y: pos});

    // const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
  
    // useEffect(() => {
    //   // 👇️ get global mouse coordinates
    //   const handleWindowMouseMove = event => {
    //     setGlobalCoords({
    //       x: event.screenX,
    //       y: event.screenY,
    //     });
    //   };
    //   window.addEventListener('mousemove', handleWindowMouseMove);
  
    //   return () => {
    //     window.removeEventListener('mousemove', handleWindowMouseMove);
    //   };
    // }, []);

    // const handleMouseMove = event => {
    //   setMousePos({
    //     x: event.clientX - event.target.offsetLeft,
    //     y: event.clientY - event.target.offsetTop,
    //   });
    // };
  

    return (
    <Container>
    <Cards id="cards">
      <ProjectCard title={'project 1'} description={'my project'}/>
      <ProjectCard title={'project 2'} description={'my project'}/>
      <ProjectCard title={'project 3'} description={'my project'}/>
      <ProjectCard title={'project 4'} description={'my project'}/>
      <ProjectCard title={'project 5'} description={'my project'}/>
      <ProjectCard title={'project 6'} description={'my project'}/>

  {/* <Card className="card" onMouseMove={null}
  >
    <Content className="card-content">
      <div className="card-image">
        <i className="fa-duotone fa-apartment"></i>
      </div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <i className="fa-duotone fa-apartment"></i>
          <div className="card-info-title">
            <h3>Apartments</h3>  
            <h4>({mousePos.x}, {mousePos.y})</h4>
          </div>    
        </div>
      </div>
    </Content> 
  </Card>
  <Card className="card">
    <Content className="card-content">
      <div className="card-image">
        <i className="fa-duotone fa-unicorn"></i>
      </div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <i className="fa-duotone fa-unicorn"></i>
          <div className="card-info-title">
            <h3>Unicorns</h3>  
            <h4>A single corn. Er, I mean horn.</h4>
          </div>    
        </div>  
      </div>
    </Content>
  </Card>
  <Card className="card">
    <Content className="card-content">
      <div className="card-image">
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
      </div>
    </Content>
  </Card>
  <Card className="card">
    <Content className="card-content">
      <div className="card-image">
        <i className="fa-duotone fa-person-to-portal"></i>
      </div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <i className="fa-duotone fa-person-to-portal"></i>
          <div className="card-info-title">
            <h3>Adios</h3>  
            <h4>See you...</h4>
          </div>    
        </div>
      </div>
    </Content>
  </Card>
  <Card className="card">
    <Content className="card-content">
      <div className="card-image">
        <i className="fa-duotone fa-person-from-portal"></i>
      </div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <i className="fa-duotone fa-person-from-portal"></i>
          <div className="card-info-title">
            <h3>I mean hello</h3>  
            <h4>...over here.</h4>
          </div>    
        </div>
      </div>
    </Content>
  </Card>
  <Card className="card" mouseX={mousePos.x} mouseY={mousePos.y}>
    <Content className="card-content">
      <div className="card-image">
        <i className="fa-duotone fa-otter"></i>
      </div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <i className="fa-duotone fa-otter"></i>
          <div className="card-info-title">
            <h3>Otters</h3>  
            <h4>Look at me, imma cute lil fella.</h4>
          </div>    
        </div>
      </div>
    </Content>
  </Card> */}
</Cards>

    </Container>
    );
  };

const Container = styled.div`
display: flex;
justify-content: center;
  align-items: center;
`

// const Card = styled.div`
//     background-color: rgba(255, 255, 255, 0.1);
//     border-radius: 10px;
//     cursor: pointer;
//     display: flex;
//     height: 260px;
//     flex-direction: column;
//     position: relative; 
//     width: 300px;  

//     &::before {
//     background: radial-gradient(
//        600px circle at ${props => props.mouseX}px ${props => props.mouseY}px, 
//        rgba(255, 255, 255, 0.4),
//        transparent 40%
//      );
//     border-radius: inherit;
//     content: "";
//     height: 100%;
//     left: 0px;
//     opacity: 0;
//     position: absolute;
//     top: 0px;
//     transition: opacity 500ms;
//     width: 100%;
//     z-index: 2;
//   }

//   &::after {
//     background: radial-gradient(
//        600px circle at ${props => props.mouseX}px ${props => props.mouseY}px, 
//        rgba(255, 255, 255, 0.4),
//        transparent 40%
//      );
//     border-radius: inherit;
//     content: "";
//     height: 100%;
//     left: 0px;
//     opacity: 0;
//     position: absolute;
//     top: 0px;
//     transition: opacity 500ms;
//     width: 100%;
//     z-index: 1;
//   }
// ` 
//  const Card = styled.div.attrs(({mouseX, mouseY}) => ({
//    style: {
//      background: `radial-gradient(
//        800px circle at ${mouseX}px ${mouseY}px, 
//        rgba(255, 255, 255, 0.06),
//        transparent 40%`
//    }
//  }))`
//      background-color: rgba(255, 255, 255, 0.1);
//      border-radius: 10px;
//      cursor: pointer;
//      display: flex;
//      height: 260px;
//      flex-direction: column;
//      position: relative; 
//      width: 300px;  

//      &::before {
//      background: radial-gradient(
//        800px circle at ${props => props.mouseX}px ${props => props.mouseY}px, 
//        rgba(255, 255, 255, 0.06),
//        transparent 40%
//      );
//      border-radius: inherit;
//      content: "";
//      height: 100%;
//      left: 0px;
//      opacity: 0;
//      position: absolute;
//      top: 0px;
//      transition: opacity 500ms;
//      width: 100%;
//      z-index: 2;
//    }

//    &::after {
//      border-radius: inherit;
//      content: "";
//      height: 100%;
//      left: 0px;
//      opacity: 0;
//      position: absolute;
//      top: 0px;
//      transition: opacity 500ms;
//      width: 100%;

//      background: radial-gradient(
//        600px circle at ${props => props.mouseX}px ${props => props.mouseY}px, 
//        rgba(255, 255, 255, 0.4),
//        transparent 40%
//      );
//      z-index: 1;
//    }

//   &:hover::before {
//     opacity: 1;
//   }
//  `

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;  
  max-width: 916px;
  width: calc(100% - 20px);
  
  justify-content: center;
  align-items: center;

`
// const Content = styled.div`
//     background-color: var(--card-color);
//     background-color: rgb(23, 23, 23, 0.7);
//     border-radius: inherit;
//     display: flex;
//     flex-direction: column;
//     flex-grow: 1;
//     inset: 1px;
//     padding: 10px;
//     position: absolute;
//     z-index: 2;
// `

// const Container = styled.div`
// `
// const Container = styled.div`
// `