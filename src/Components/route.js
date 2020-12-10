import React from "react";
import Navbar from "./navbar";

const Route = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="">
        <Navbar />
        {/* <div className="loginContainer">
          <p
            className="login f6 link dim avenir underline  pointer"
            onClick={() => onRouteChange("signout")}
          >
            sign out
          </p>
        </div> */}
      </nav>
    );
  } else {
    return (
      <nav className="">
        {/* <Navbar /> */}
        {/* <div className="loginContainer">
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
        </div> */}
      </nav>
    );
  }
};

export default Route;
