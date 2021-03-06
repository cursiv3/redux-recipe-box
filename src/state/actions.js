import * as actionTypes from "./actionTypes";
//import { database } from "../mockDB.js";

const DB = require("../mockDB");

export const addRecipe = (recipes, obj) => {
  obj.id = DB.idIncrement + 1;
  DB.idIncrement++;
  recipes.push(obj);
  DB.recipes = recipes;

  return { type: actionTypes.ADD_RECIPE, payload: DB };
};

export const editRecipe = (recipes, id, updateObj) => {
  // find what element in the array the updated recipe is
  // assign that value to entry var
  var entry = recipes
    .map(recipe => {
      return recipe.id;
    })
    .indexOf(id);

  var updatedRecipes = recipes.map((recipe, idx) => {
    return idx === entry ? updateObj : recipe;
  });

  // here I'd be sending data to the DB for save, using FS since I've mocked it
  DB.recipes = updatedRecipes;

  return { type: actionTypes.EDIT_RECIPE, payload: DB };
};

export const deleteRecipe = (recipes, id) => {
  let updatedRecipes = recipes.filter(recipe => recipe.id !== id);
  DB.recipes = updatedRecipes;

  return {
    type: actionTypes.DELETE_RECIPE,
    payload: DB
  };
};

export const fetchData = () => receiveData(DB);

export const receiveData = data => {
  return {
    type: actionTypes.RECEIVE_DATA,
    payload: data
  };
};

export const openModal = (recipe, buttonName) => {
  return {
    type: actionTypes.OPEN_MODAL,
    payload: { recipe: recipe, buttonName: buttonName }
  };
};

export const closeModal = () => ({ type: actionTypes.CLOSE_MODAL });
