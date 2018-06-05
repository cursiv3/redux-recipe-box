import Recipe from "./Recipe";
import { connect } from "react-redux";
import { addRecipe, editRecipe, deleteRecipe } from "../../state/actions";

const mapStateToProps = state => ({
  data: state
});

const mapDispatchToProps = dispatch => {
  return {
    addRecipe: () => {
      dispatch(addRecipe());
    },
    editItem: () => {
      dispatch(editRecipe());
    },
    deleteRecipe: () => {
      dispatch(deleteRecipe());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
