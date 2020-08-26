import React, { Component } from "react";
import Form from "../form/form";

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
      <div className="center mt5">
        <article className="br3 ba dark-gray b--black-10 mv4 mw5">
          <main className="pa4 pa4 shadow-5 bg-white br3 ">
            <form className="measure" onSubmit={this.handleSubmit}>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 center">sign in</legend>
                <Form onChange={this.onEmailChange} inputType="email" />
                <Form onChange={this.onPasswordChange} inputType="password" />
              </fieldset>
              <div className="center">
                <button
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  onClick={this.onSubmitSignIn}
                  type="submit"
                >
                  sign in
                </button>
              </div>
              <p
                className="center f6 pointer grow"
                onClick={() => onRouteChange("signup")}
              >
                sign up
              </p>
            </form>
          </main>
        </article>
      </div>
    );
  }
}

export default SignIn;
