import React from "react";
import "./nav.css";
import Logo from "../logo/logo";

const Nav = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="navbar">
        <Logo />
        <div className="loginContainer">
          <p
            className="login f6 link dim avenir underline  pointer"
            onClick={() => onRouteChange("signout")}
          >
            sign out
          </p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <Logo />
        <div className="loginContainer">
          <p
            className="login f6 link dim avenir underline  pointer"
            onClick={() => onRouteChange("signin")}
          >
            sign in
          </p>
          <p
            className="login f6 link dim avenir underline  pointer"
            onClick={() => onRouteChange("signup")}
          >
            sign up
          </p>
        </div>
      </nav>
    );
  }
};

export default Nav;
