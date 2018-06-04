import * as actionTypes from "../actionsTypes";

export const fetchInitData = (state = false, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return true;
    default:
      return state;
  }
};

export const recipes = (state = [], action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_DATA:
    case actionTypes.ADD_RECIPE:
    case actionTypes.EDIT_RECIPE:
    case actionTypes.DELETE_RECIPE:
      return action.payload;
    default:
      return state;
  }
};

export const isModalOpen = (state = false, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return true;
    case actionTypes.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};
