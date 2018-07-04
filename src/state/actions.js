import * as actionTypes from "./actionTypes";
import { database } from "../mockDB.js";

const DB = database();

export const addRecipe = (recipes, obj) => {
  recipes.push(obj);
  return { type: actionTypes.ADD_RECIPE, payload: recipes };
};

export const editRecipe = (recipes, id, updateObj) => {
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

  // here I'd be sending data to the DB for save, using FS since I've mocked it
  DB(updatedRecipes);
  receiveData(DB());

  return { type: actionTypes.EDIT_RECIPE, payload: updatedRecipes };
};

export const deleteRecipe = (recipes, id) => {
  let updatedRecipes = recipes.filter(recipe => recipe.id !== id);

  return {
    type: actionTypes.DELETE_RECIPE,
    payload: updatedRecipes
  };
};

export const fetchData = () => receiveData(DB());

export const receiveData = data => {
  return {
    type: actionTypes.RECEIVE_DATA,
    payload: data
  };
};

export const openModal = recipe => {
  return {
    type: actionTypes.OPEN_MODAL,
    payload: recipe
  };
};

export const closeModal = () => ({ type: actionTypes.CLOSE_MODAL });
