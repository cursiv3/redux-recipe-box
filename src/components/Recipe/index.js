import Recipe from "./Recipe";
import { connect } from "react-redux";
import { editRecipe, deleteRecipe } from "../../state/actions";

const mapDispatchToProps = dispatch => {
  return {
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
