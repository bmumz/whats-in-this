import React from "react";
import "./nav.css";
import Logo from "../logo/logo";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <Logo />
        <div className="loginContainer">
          <p className="login f6 link dim avenir underline  pointer">sign in</p>
        </div>
      </nav>
      <div className="container"></div>
    </div>
  );
};

export default Nav;
