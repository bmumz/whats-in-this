import React from "react";
import Tilt from "react-parallax-tilt";
import foodLogo from "../Images/whatsinthislogo.png";

const Logo = () => {
  return (
    <div>
      <Tilt className="navbar">
        <img src={foodLogo} alt="logo" className="navbar__img" />
      </Tilt>
    </div>
  );
};

export default Logo;
