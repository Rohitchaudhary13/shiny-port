import React from "react";
import { NavLink } from "react-router-dom";
import "../Hero/Hero.css";
import MovingText from 'react-moving-text'

const Hero = () => {
  return (
    <div className="container-hero">
      {/* <div className='circle pos1'></div> */}
      <h3 className="hello">Hello, This is </h3>
      {/* <h1 >Rohit</h1> */}
      <MovingText
        type="swing"
        duration="5000ms"
        delay="0.5s"
        direction="normal"
        timing="ease-in-out"
        iteration="infinite"
        fillMode="none"
        className="name"
      >
        Rohit
      </MovingText>
      <div className="image-container"></div>
      <div className="overImage">
        <p className="para">
          An enthusiastic coder that enjoys sharing his knowledge, views and
          has a strong drive to learn new things.
        </p>
        <NavLink to="/projects">
          <button className="btn btn-light">See my works!</button>
        </NavLink>
      </div>
      {/* <div className='circle pos2'></div> */}
    </div>
  );
};

export default Hero;
