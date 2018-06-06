import { connect } from "react-redux";
import { fetchData, openModal } from "../state/actions";
import App from "./App";

const mapStateToProps = state => ({
  state: state.data
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    },
    openModal: () => {
      dispatch(openModal());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
