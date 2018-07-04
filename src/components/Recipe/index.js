import Recipe from "./Recipe";
import { connect } from "react-redux";
import { editRecipe, deleteRecipe, openModal } from "../../state/actions";

const mapDispatchToProps = dispatch => {
  return {
    openModal: (recipe, buttonName) => {
      dispatch(openModal(recipe, buttonName));
    },
    editItem: () => {
      dispatch(editRecipe());
    },
    deleteRecipe: () => {
      dispatch(deleteRecipe());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Recipe);
