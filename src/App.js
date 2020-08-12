import React, { Component } from "react";
import Clarifai from "clarifai";
import "./App.css";
import Nav from "./Components/nav/nav";
import SignIn from "./Components/signIn/signIn";
import SignUp from "./Components/signUp/signUp";
import ImageLinkForm from "./Components/ImageLinkForm/imageLinkForm";
import UserInfo from "./Components/UserInfo/userInfo";
import RecipePrediction from "./Components/RecipePrediction/recipePrediction";

const app = new Clarifai.App({
  apiKey: "4e32a1dc665a4462a7886ee38d1ddcb7",
});

const initialState = {
  input: "",
  imageUrl: "",
  results: [],
  imageAlt: "",
  route: "signin",
  isSignedIn: false,
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
    app.models
      .predict(Clarifai.FOOD_MODEL, this.state.input)
      .then((response) => {
        if (response) {
          fetch("http://localhost:3000/image", {
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
    let { imageUrl, results, route, isSignedIn } = this.state;

    return (
      <div className="App">
        <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === "home" ? (
          <div>
            <UserInfo
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <RecipePrediction
              imageUrl={imageUrl}
              results={results}
              imageAlt="Your food photo."
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
          </div>
        ) : route === "signup" ? (
          <div>
            <SignUp
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
          </div>
        ) : (
          <div>
            <SignIn
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
