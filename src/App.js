import React, { Component } from "react";
import Clarifai from "clarifai";
import "./App.css";
import Nav from "./Components/nav/nav";
import SignIn from "./Components/signIn/signIn";
import SignUp from "./Components/signUp/signUp";
import ImageLinkForm from "./Components/ImageLinkForm/imageLinkForm";
// import UserInfo from "./Components/UserInfo/userInfo";
import RecipePrediction from "./Components/RecipePrediction/recipePrediction";
const app = new Clarifai.App({
  apiKey: "4e32a1dc665a4462a7886ee38d1ddcb7",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      results: [],
      imageAlt: "",
      route: "signin",
    };
  }

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
      .then((response) => this.transformResponse(response))
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    let { imageUrl, results } = this.state;

    return (
      <div className="App">
        <Nav onRouteChange={this.onRouteChange} />
        {this.state.route === "home" ? (
          <div>
            <RecipePrediction
              imageUrl={imageUrl}
              results={results}
              imageAlt="Your food photo."
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            {/* <UserInfo /> */}
          </div>
        ) : this.state.route === "signin" ? (
          <div>
            <SignIn onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <SignUp onRouteChange={this.onRouteChange} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
