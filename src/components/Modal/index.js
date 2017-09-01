import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from './Modal';
import { hideModal } from '../AppShell/action';

const mapStateToProps = state => ({
  ...state.appshell.modalDetails,
  modalShown: state.appshell.modalShown,
});

const mapDispatchToProps = dispatch => ({
  dispatchHideModal: () => {
    dispatch(hideModal());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
