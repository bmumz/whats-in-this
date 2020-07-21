import React from "react";
import "./logo.css";
import Tilt from "react-parallax-tilt";
import foodLogo from "./whatsinthislogo.png";

const Logo = () => {
  return (
    <div className="logoContainer">
      <div className="parent">
        <Tilt>
          <div>
            <img src={foodLogo} alt="logo" className="logoImg" />
          </div>
        </Tilt>
        <div className="logo"></div>
        <div className="title">... what's in this?</div>
      </div>
    </div>
  );
};

export default Logo;
