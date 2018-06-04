import * as actionTypes from "./actionTypes";
import DB from "../../mockDB.json";

export const addItem = (recipes, obj) => {
  recipes.push(obj);
  return { type: actionTypes.ADD_ITEM, payload: recipes };
};

export const editItem = (recipes, id, updateObj) => {
  // find what element in the array the updated recipe is
  // assign that value to entry var
  var entry = recipes
    .map(recipe => {
      return recipe.id;
    })
    .indexOf(id);

  // map through recipes, when we reach the element that needs to be updated
  // return the updateObj from the modal to the array
  // else return the element as is
  var updatedRecipes = recipes.map((recipe, idx) => {
    return idx === entry ? updateObj : recipe;
  });

  return { type: actionTypes.EDIT_ITEM, payload: updatedRecipes };
};

export const deleteItem = (recipes, id) => {
  let updatedRecipes = recipes.filter(recipe => recipe.id !== id);

  return {
    type: actionTypes.DELETE_ITEM,
    payload: updatedRecipes
  };
};

export const fetchData = () => receiveData(DB);

export const receiveData = json => ({
  type: actionTypes.RECEIVE_DATA,
  payload: json.recipes
});
