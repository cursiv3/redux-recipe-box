import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const rootEl = document.getElementById("root");

ReactDOM.render(<App />, document.getElementById("root"));
