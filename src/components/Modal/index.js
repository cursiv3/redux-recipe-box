import { connect } from "react-redux";
import Modal from "./Modal";
import {
  editRecipe,
  addRecipe,
  closeModal,
  deleteRecipe
} from "../../state/actions";

const mapStateToProps = state => ({
  data: state.isModalOpen,
  allRecipes: state.data.recipes
});

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(closeModal());
    },
    editRecipe: (state, id, newObj) => {
      dispatch(editRecipe(state, id, newObj));
    },
    addRecipe: (recipesList, newObj) => {
      dispatch(addRecipe(recipesList, newObj));
    },
    deleteRecipe: (recipesList, id) => {
      dispatch(deleteRecipe(recipesList, id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
