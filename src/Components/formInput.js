import React, { Component } from "react";

class FormInput extends Component {
  render() {
    let { inputType, onChange } = this.props;
    return (
      <div>
        <div>
          <label className="db fw6 lh-copy f6" htmlFor={inputType}>
            {inputType}
          </label>
          <input
            required
            className="pa2 input-reset ba bg-transparent hover-black"
            type={inputType}
            name={inputType}
            id={inputType}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}

export default FormInput;
