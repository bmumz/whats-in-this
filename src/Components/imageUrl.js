import React from "react";

const ImageUrl = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="container">
      <p className="f5 pa2 center">
        ...What's In This? will predict ingredients based on a photo of food!{" "}
        <br />
        Give it a try by inserting the image URL below.
      </p>
      <div className="pa4 br3 shadow-5">
        <div className="urlContainer center">
          <input
            className="url "
            type="text"
            placeholder="Image URL"
            onChange={onInputChange}
          />
          <button
            className="detectButton grow f6 link ph3 pv2"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUrl;
