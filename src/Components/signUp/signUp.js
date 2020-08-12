import React, { Component } from "react";
import Form from "../form/form";

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
    fetch("http://localhost:3000/signup", {
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
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <div className="center ">
        <article className="br3 ba dark-gray b--black-10 mv4 mw5">
          <main className="pa4 pa4 shadow-5 bg-white br3 ">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 center">sign up</legend>
                <Form onChange={this.onNameInput} inputType="name" />
                <Form onChange={this.onEmailInput} inputType="email" />
                <Form onChange={this.onPasswordInput} inputType="password" />
              </fieldset>
              <div className="center">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  onClick={this.onSubmitSignUp}
                  type="submit"
                  value="Sign up"
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default SignUp;
