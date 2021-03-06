import React, { Component } from "react";
import SignIn from "./Components/form/signIn";
import SignUp from "./Components/form/signUp";
import About from "./Components/about";
import Features from "./Components/features";
import ImageUrl from "./Components/imageUrl";
import UserTracking from "./Components/userTracking";
import PredictedIngredients from "./Components/predictedIngredients";

const initialState = {
  input: "",
  imageUrl: "",
  results: [],
  imageAlt: "",
  route: "signin",
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  transformResponse = (data) => {
    const clarafaiIngredients = data.outputs[0].data.concepts;

    const results = clarafaiIngredients.map((ingredient) => ({
      ingredients: ingredient.name,
      probability: ingredient.value,
    }));

    this.setState({ results });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://murmuring-plains-92587.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch("https://murmuring-plains-92587.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }

        this.transformResponse(response);
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  };

  render() {
    let { imageUrl, results, route } = this.state;

    return (
      <div>
        <div className="">
          <About />
          <Features />
          {route === "home" ? (
            <div className="prediction__page" id="route">
              <div className="upload__profile">
                <ImageUrl
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit}
                />

                <UserTracking
                  name={this.state.user.name}
                  entries={this.state.user.entries}
                />
              </div>
              <PredictedIngredients
                imageUrl={imageUrl}
                results={results}
                imageAlt="Your food photo."
              />
            </div>
          ) : route === "signup" ? (
            <div className="form__page">
              <SignUp
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
              />
            </div>
          ) : (
            <div className="form__page">
              <SignIn
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
