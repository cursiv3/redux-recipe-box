import { connect } from "react-redux";
import Modal from "./Modal";
import { editRecipe, closeModal } from "../../state/actions";

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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
