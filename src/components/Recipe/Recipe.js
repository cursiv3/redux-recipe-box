import React from "react";
import "./recipe.css";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
      directions: this.props.data.directions,
      ingredients: this.props.data.ingredients,
      name: this.props.data.name
    };
  }

  openDrawer() {
    var result;
    this.state.isDrawerOpen ? (result = false) : (result = true);
    this.setState({ isDrawerOpen: result });
  }

  csvToList(csvStr, listType) {
    return listType === "ul" ? (
      <ul>
        {csvStr.split(",").map((entry, idx) => <li key={idx}>{entry}</li>)}
      </ul>
    ) : (
      <ol>
        {csvStr.split(",").map((entry, idx) => <li key={idx}>{entry}</li>)}
      </ol>
    );
  }

  render() {
    let props = this.props.data;
    return (
      <div className="recipe-wrapper">
        <h3 className="recipe-header">{props.name}</h3>

        <div
          className="recipe-drawer-carat-button"
          onClick={() => this.openDrawer()}
        >
          <strong>V</strong>
        </div>

        {this.state.isDrawerOpen && (
          <div className="recipe-drawer">
            <h5>Ingredients</h5>

            {this.csvToList(props.ingredients, "ul")}

            <h5>Directions</h5>

            {this.csvToList(props.directions, "ol")}

            <div
              id="edit-button"
              className="button-secondary"
              onClick={evt => this.props.openModal(props, evt.target.id)}
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
