import React from "react";
import Tilt from "react-parallax-tilt";
import foodLogo from "../Images/whatsinthislogo.png";

const Logo = () => {
  return (
    <div>
      <div className="navbar">
        <Tilt className="tilt">
          <img src={foodLogo} alt="logo" className="navbar__img" />
        </Tilt>
      </div>
    </div>
  );
};

export default Logo;
