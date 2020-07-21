import React from "react";
import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="container">
      <div className="userContainer center">
        <div className="redBg pa4 br3 shadow-5">
          <div className="center f4">{"Brandi, here are your current"}</div>
          <div className="f3 center underline">{"predicted ingredients:"}</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
