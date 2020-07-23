import React from "react";
import "./nav.css";
import Logo from "../logo/logo";

const Nav = ({ onRouteChange }) => {
  return (
    <div>
      <nav className="navbar">
        <Logo />
        <div className="loginContainer">
          <p
            className="login f6 link dim avenir underline  pointer"
            onClick={() => onRouteChange("")}
          >
            sign out
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
