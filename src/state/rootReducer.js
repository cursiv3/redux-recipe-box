import { combineReducers } from "redux";
import { fetchInitData, data, isModalOpen } from "./reducers/reducers.js";

const rootReducer = combineReducers({
  fetchInitData,
  data,
  isModalOpen
});

export default rootReducer;
