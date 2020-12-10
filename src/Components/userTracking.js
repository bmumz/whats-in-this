import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);

    this.state = {
      visibility: false,
    };
  }

  onToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    const { name, entries } = this.props;
    return (
      <div className="upload__profile">
        <button
          className="upload__button --transparent"
          onClick={this.onToggle}
        >
          {this.state.visibility ? (
            <div className="">close</div>
          ) : (
            <div className="">
              <FontAwesomeIcon icon={faUserCircle} /> Profile
            </div>
          )}
        </button>
        {this.state.visibility && (
          <div className="upload__entries">
            {`${name}`}, you've uploaded {`${entries}`} food photos for
            prediction!
          </div>
        )}
      </div>
    );
  }
}
