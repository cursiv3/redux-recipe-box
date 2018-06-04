import { combineReducers } from "redux";
import { fetchInitData, recipes, isModalOpen } from "./reducers/reducers.js";

const rootReducer = combineReducers({
  fetchInitData,
  recipes,
  isModalOpen
});

export default rootReducer;
