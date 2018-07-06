import React from "react";
import "./deleteButton.css";

const DeleteButton = props => {
  return (
    <div
      className="delete-button-wrapper"
      onClick={() => {
        props.deleteRecipe(props.recipesList, props.recipeId);
        props.closeModal();
      }}
    >
      <div className="delete-button-div1" />
      <div className="delete-button-div2" />
      <div className="delete-button-text-div">
        <h6>Delete Recipe</h6>
      </div>
    </div>
  );
};

export default DeleteButton;
