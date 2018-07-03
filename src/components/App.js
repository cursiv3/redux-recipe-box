import React, { Component } from "react";
import Modal from "./Modal";
import Recipe from "./Recipe";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      idTracker: null,
      isModalOpen: false
    };
  }

  componentWillMount() {
    async function getData(fetchFunc) {
      fetchFunc();
    }
    getData(this.props.fetchData).then(() => {
      var storeData = this.props.state;
      this.setState({
        recipes: storeData.recipes,
        idTracker: storeData.idIncrement,
        isModalOpen: storeData.isModalOpen
      });
    });
  }

  modalRenderCheck() {
    if (this.props.isModalOpen) {
      return <Modal />;
    }
  }

  render() {
    return (
      <div className="recipe-box-container">
        {this.state.recipes.map(recipeData => (
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
