import React from "react";
import "./modal.css";

class Modal extends React.Component {
  state = this.props.data;

  onChange(evt) {
    let recipeCopy = this.state.recipe;
    recipeCopy[evt.target.name] = evt.target.value;
    this.setState(recipeCopy);
  }

  render() {
    return (
      <div
        className="modal-background-wrapper"
        onChange={evt => this.onChange(evt)}
      >
        <div className="modal-opaque-background" />
        <div className="modal-box">
          <h5>Recipe Name</h5>
          <textarea
            className="modal-text-area"
            style={{ minHeight: "initial" }}
            name="name"
            cols="30"
            rows="1"
            value={this.state.recipe.name}
          />

          <h5>Ingredients</h5>
          <textarea
            className="modal-text-area"
            name="ingredients"
            cols="30"
            rows="10"
            value={this.state.recipe.ingredients}
          />

          <h5>Directions</h5>
          <textarea
            className="modal-text-area"
            name="directions"
            cols="50"
            rows="13"
            value={this.state.recipe.directions}
          />

          <div
            className="button-main"
            onClick={() => {
              if (this.state.buttonName === "edit-button") {
                this.props.editRecipe(
                  this.props.allRecipes,
                  this.state.recipe.id,
                  this.state.recipe
                );
              } else if (this.state.buttonName === "add-button") {
                let newRecipe = {
                  name: this.state.recipe.name,
                  ingredients: this.state.recipe.ingredients,
                  directions: this.state.recipe.directions
                };
                this.props.addRecipe(this.props.allRecipes, newRecipe);
              }
              this.props.closeModal();
            }}
          >
            Save
          </div>
          <div
            className="button-secondary"
            onClick={() => this.props.closeModal()}
          >
            Cancel
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
