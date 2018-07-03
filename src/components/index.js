import { connect } from "react-redux";
import { fetchData, openModal } from "../state/actions";
import App from "./App";

const mapStateToProps = state => ({
  state: state.data,
  isModalOpen: state.isModalOpen
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    },
    openModal: recipe => {
      dispatch(openModal(recipe));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
