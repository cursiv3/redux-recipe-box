import React, { Component } from "react";
import Modal from "./Modal";
import Recipe from "./Recipe";

class App extends Component {
  render() {
    return (
      <div className="recipe-box-container">
        <Recipe />
        <Modal />
      </div>
    );
  }
}

export default App;
