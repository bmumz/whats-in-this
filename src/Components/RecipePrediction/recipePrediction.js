import React from "react";
import "./recipePrediction.css";

const RecipePrediciton = ({ imageUrl, results, imageAlt }) => {
  const prediction = results.map((result, index) => {
    const { ingredients, probability } = result;
    const percentage = (probability * 100).toFixed(2) + "%";
    return (
      <div key={index}>
        <ul className="predictedIngredients">
          <li className="ingredients">{ingredients}</li>
          <li className="probability">{percentage}</li>
        </ul>
      </div>
    );
  });

  if (prediction && prediction.length > 1) {
    return (
      <div className="parentContainer">
        <div className="center container ingredientsContainer pa4 br3 shadow-5 ">
          <img
            className="foodImage pa2 br3 shadow-5"
            src={imageUrl}
            alt={imageAlt}
          />
          <div className="prediction pa4 br3 shadow-5">
            <div className="titles">
              <div className="ingredientsTitle">Predicted Ingredients:</div>
              <div className="probabilityTitle">Probability:</div>
            </div>
            {prediction}
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default RecipePrediciton;
