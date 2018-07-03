import React from "react";

class Modal extends React.Component {
  state = this.props.data;

  onChange(evt) {
    let stateCpy = this.state;
    stateCpy[evt.target.name] = evt.target.value;
    this.setState(stateCpy);
  }

  render() {
    return (
      <div onChange={evt => this.onChange(evt)}>
        <h5>Ingredients</h5>
        <textarea
          name="ingredients"
          cols="30"
          rows="10"
          value={this.state.ingredients}
        />
        <h5>Directions</h5>
        <textarea
          name="directions"
          cols="30"
          rows="10"
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
    );
  }
}

export default Modal;
