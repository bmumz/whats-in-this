import React, { Component } from "react";
import FormInput from "./formInput";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }
  onNameInput = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailInput = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordInput = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignUp = () => {
    fetch("https://murmuring-plains-92587.herokuapp.com/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div id="route">
        <form
          className="form center f5 measure-narrow shadow-5 pa4 br3"
          onSubmit={this.handleSubmit}
        >
          <fieldset id="sign_up" className="center b--transparent ">
            <legend className="f4 fw6 ph0 mh0 center">sign up</legend>
            <FormInput onChange={this.onNameInput} inputType="name" />
            <FormInput onChange={this.onEmailInput} inputType="email" />
            <FormInput onChange={this.onPasswordInput} inputType="password" />
          </fieldset>
          <div className="form__button">
            <button
              className="grow shadow-5"
              onClick={this.onSubmitSignUp}
              type="submit"
            >
              sign up
            </button>
          </div>
          <p
            className="f5 mt3 pointer center"
            onClick={() => onRouteChange("signin")}
          >
            sign in
          </p>
        </form>
      </div>
    );
  }
}

export default SignUp;
