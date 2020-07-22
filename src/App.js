import React, { Component } from "react";
import Clarifai from "clarifai";
import "./App.css";
import Nav from "./Components/nav/nav";
import ImageLinkForm from "./Components/ImageLinkForm/imageLinkForm";
// import UserInfo from "./Components/UserInfo/userInfo";
import RecipePrediction from "./Components/RecipePrediction/recipePrediction";
const app = new Clarifai.App({
  apiKey: "4e32a1dc665a4462a7886ee38d1ddcb7",
});

class App extends Component {
  constructor() {
    super();
    this.state = { input: "", imageUrl: "", results: [], imageAlt: "" };
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

  render() {
    return (
      <div className="App">
        <Nav />
        <RecipePrediction
          imageUrl={this.state.imageUrl}
          results={this.state.results}
          imageAlt="Your food photo."
        />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <UserInfo /> */}
      </div>
    );
  }
}

export default App;
