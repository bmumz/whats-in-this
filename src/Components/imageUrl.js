import React from "react";

const ImageUrl = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="upload">
      <div className="upload__container center">
        <input
          className="upload__bar br4 f4 pa2 shadow-5"
          type="text"
          placeholder="Image URL"
          onChange={onInputChange}
        />
        <button
          className="upload__button grow shadow-5"
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageUrl;
