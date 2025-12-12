import React from "react";
export default function Instructions(props) {
  // when continute button is clicked set state to true
  return (
    <div className="instructions">
      <h1>Instructions</h1>
      <p>
        Enter <b>4 or more ingredients</b>.
        <br />↓ <br />
        Click the <span>Get Recipe</span> button to generate your recipe.
      </p>
      <button onClick={props.getResume}>Continue</button>
    </div>
  );
}
