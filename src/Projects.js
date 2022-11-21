import styled from "styled-components";
import "./cards.css"
import { useState, useEffect } from "react";

export const Projects = () => {

    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, []);

    return (
    <div>
    <div id="cards">
  <Card className="card" onMouseMove={null}
  >
    <div className="card-content">
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
    </div>
  </Card>
  <Card className="card">
    <div className="card-content">
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
    </div>
  </Card>
  <Card className="card">
    <div className="card-content">
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
    </div>
  </Card>
  <Card className="card">
    <div className="card-content">
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
    </div>
  </Card>
  <Card className="card">
    <div className="card-content">
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
    </div>
  </Card>
  <Card className="card">
    <div className="card-content">
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
    </div>
  </Card>
</div>

    </div>);
  };

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
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;

    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y), 
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  &::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;

    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y), 
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }
`
// const Card = styled.div`
// `
// const Card = styled.div`
// `
// const Card = styled.div`
// `