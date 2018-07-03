import React from "react";
import Modal from "../Modal";
import "./recipe.css";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
      directions: this.props.data.directions,
      ingredients: this.props.data.ingredients
    };
  }

  openDrawer() {
    var result;
    this.state.isDrawerOpen ? (result = false) : (result = true);
    this.setState({ isDrawerOpen: result });
  }

  csvToList(csvStr, listType) {
    return listType === "ul" ? (
      <ul>{csvStr.split(",").map(entry => <li>{entry}</li>)}</ul>
    ) : (
      <ol>{csvStr.split(",").map(entry => <li>{entry}</li>)}</ol>
    );
  }

  render() {
    let recipe = this.props.data;
    return (
      <div className="recipe-wrapper">
        <h3 className="recipe-header">{recipe.name}</h3>
        <div
          className="recipe-drawer-carat-button"
          onClick={() => this.openDrawer()}
        >
          V
        </div>
        {this.state.isDrawerOpen && (
          <div className="recipe-drawer">
            <h5>Ingredients</h5>
            {this.csvToList(this.state.ingredients, "ul")}
            <h5>Directions</h5>
            {this.csvToList(this.state.directions, "ol")}
            <div
              className="button-secondary"
              onClick={() => this.props.openModal(recipe)}
            >
              Edit
            </div>
            <div className="button-tertiary" onClick={() => this.openDrawer()}>
              Close
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
