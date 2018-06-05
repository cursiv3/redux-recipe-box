import { connect } from "react-redux";
import Modal from "./Modal";
import { openModal, closeModal } from "../../state/actions";

const mapStateToProps = state => ({
  data: state
});

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => {
      dispatch(openModal());
    },
    closeModal: () => {
      dispatch(closeModal());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
