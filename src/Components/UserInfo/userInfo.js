import React from "react";
import "./userInfo.css";

const UserInfo = ({ name, entries }) => {
  return (
    <div className="container">
      <div className="userContainer br3 center">
        <div className="redBg pa4 br3 shadow-5">
          <div className="center f4">{`${name}`}, you've uploaded</div>
          <div className="f3 center underline">{`${entries}`} food photos</div>
          <div className="center f4">for ingredient prediction!</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
