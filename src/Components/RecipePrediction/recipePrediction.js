import React from "react";
import "./recipePrediction.css";

const RecipePrediciton = ({ imageUrl, results, imageAlt }) => {
  const prediction = results.map((result, index) => (
    <div key={index} className="predictedIngredients">
      <div className="ingredients">{result.ingredients} </div>{" "}
      <div className="probability"> {result.probability}</div>
    </div>
  ));

  return (
    <div className="center container">
      <img className="foodImage" src={imageUrl} alt={imageAlt} />
      {prediction}
    </div>
  );
};

export default RecipePrediciton;
