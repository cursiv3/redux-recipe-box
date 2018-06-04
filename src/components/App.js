import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=06afd562b4744a479612bb95afe07760"
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(myjson) {
        console.log(myjson);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
