import React, { Component } from "react";
import Modal from "./Modal";
import Recipe from "./Recipe";

class App extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  modalRenderCheck() {
    if (this.props.isModalOpen) {
      return <Modal />;
    }
  }

  render() {
    console.log(this.props.state.recipes);
    return (
      <div className="recipe-box-container">
        {this.props.state.recipes !== undefined &&
          this.props.state.recipes.map(recipeData => (
            <Recipe key={recipeData.id} data={recipeData} />
          ))}
        <div className="button-main" onClick={evt => this.props.openModal(evt)}>
          Add Recipe
        </div>
        {this.modalRenderCheck()}
      </div>
    );
  }
}

export default App;
