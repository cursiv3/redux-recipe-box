import React from "react";
import "./modal.css";

class Modal extends React.Component {
  state = this.props.data;

  onChange(evt) {
    let stateCpy = this.state;
    stateCpy[evt.target.name] = evt.target.value;
    this.setState(stateCpy);
  }

  render() {
    return (
      <div
        className="modal-background-wrapper"
        onChange={evt => this.onChange(evt)}
      >
        <div className="modal-opaque-background" />
        <div className="modal-box">
          <h5>Ingredients</h5>
          <textarea
            name="ingredients"
            cols="30"
            rows="10"
            value={this.state.ingredients}
          />
          <h5>Directions</h5>
          <div
            className="div-text-area"
            contentEditable
            name="directions"
            cols="50"
            rows="13"
            value={this.state.directions}
          />
          <div
            className="button-main"
            onClick={() =>
              this.props.editRecipe(
                this.props.allRecipes,
                this.state.id,
                this.state
              )
            }
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
