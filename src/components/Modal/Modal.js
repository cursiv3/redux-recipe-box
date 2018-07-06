import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import "./modal.css";

class Modal extends React.Component {
  state = this.props.data;

  onChange(evt) {
    let recipeCopy = this.state.recipe;
    recipeCopy[evt.target.name] = evt.target.value;
    this.setState(recipeCopy);
  }

  editOrAdd(editAction, addAction) {
    if (this.state.buttonName === "edit-button") {
      editAction(
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
      addAction(this.props.allRecipes, newRecipe);
    }
  }

  render() {
    return (
      <div
        className="modal-background-wrapper"
        onChange={evt => this.onChange(evt)}
      >
        <div className="modal-opaque-background" />
        <div className="modal-box">
          {this.state.buttonName === "edit-button" && (
            <DeleteButton
              recipeId={this.state.recipe.id}
              recipesList={this.props.allRecipes}
              deleteRecipe={this.props.deleteRecipe}
              closeModal={this.props.closeModal}
            />
          )}
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
            cols="39"
            rows="13"
            value={this.state.recipe.directions}
          />
          <br />
          <div
            className="button-main "
            onClick={() => {
              this.editOrAdd(this.props.editRecipe, this.props.addRecipe);
              this.props.closeModal();
            }}
          >
            Save
          </div>
          <div
            className="button-secondary "
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
