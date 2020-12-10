import React, { Component } from "react";

class FormInput extends Component {
  render() {
    let { inputType, onChange } = this.props;
    return (
      <div>
        <div className="mt3">
          <label className="ml2 db fw4 lh-copy f5" htmlFor={inputType}>
            {inputType}
          </label>
          <input
            required
            className="form__input pa2 br4 input-reset ba bg-transparent hover-black"
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
