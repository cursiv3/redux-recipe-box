import React, { Component } from "react";
import Modal from "./Modal";
import Recipe from "./Recipe";

async function getData(fetchDataFunc) {
  fetchDataFunc();
}

class App extends Component {
  state = {
    allRecipes: []
  };

  componentWillMount() {
    getData(this.props.fetchData).then(() => {
      this.setState({ allRecipes: this.props.state.recipes });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ allRecipes: nextProps.state.recipes });
    }
  }

  modalRenderCheck() {
    /* 
    Just showing I know this method of conditional rendering in React
    */
    if (this.props.isModalOpen) {
      return <Modal />;
    }
  }

  render() {
    return (
      <div className="recipe-box-container">
        {this.state.allRecipes.map(recipeData => (
          <Recipe
            key={recipeData.id}
            data={recipeData}
            modalState={this.props.isModalOpen}
          />
        ))}
        <div
          id="add-button"
          className="button-main"
          onClick={evt => this.props.openModal([], evt.target.id)}
        >
          Add Recipe
        </div>
        {this.modalRenderCheck()}
      </div>
    );
  }
}

export default App;
