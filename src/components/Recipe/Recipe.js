import React from "react";
import { csvToList } from "../../helpers/csvToList";
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

            <hr style={{ width: "30%" }} />

            <div className="recipe-ingredients-container">
              {csvToList(props.ingredients, "ul")}
            </div>

            <h5>Directions</h5>

            <hr style={{ width: "50%" }} />

            <div className="recipe-directions-container">
              {csvToList(props.directions, "ol")}
            </div>

            <hr style={{ width: "50%" }} />

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
