import React, { Component } from "react";
import FormInput from "./formInput";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };
  onSubmitSignIn = () => {
    fetch("https://murmuring-plains-92587.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
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
            <legend className="f4 fw6 ph0 mh0 center">sign in</legend>
            <FormInput onChange={this.onEmailChange} inputType="email" />
            <FormInput onChange={this.onPasswordChange} inputType="password" />
          </fieldset>
          <div className="form__button">
            <button
              className="grow shadow-5"
              onClick={this.onSubmitSignIn}
              type="submit"
            >
              sign in
            </button>
          </div>
          <p
            className="f5 mt3 pointer center"
            onClick={() => onRouteChange("signup")}
          >
            sign up
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;
