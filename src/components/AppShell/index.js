import { connect } from 'react-redux';
import AppShell from './AppShell';
import { withRouter } from 'react-router-dom';
import {
  showModal,
  hideModal,
  login,
  loginSuccessful,
  loginFailed,
  signup,
  logout,
} from './action';

const mapStateToProps = state => ({
  ...state.appshell,
});

const mapDispatchToProps = dispatch => ({
  dispatchShowModal: (title, type, actionFunction) => {
    dispatch(showModal(title, type, actionFunction));
  },
  dispatchLogout: () => {
    dispatch(logout());
  },
  dispatchLogin: (username, password, contactNumber, adminUser) => {
    dispatch(login(username, password, contactNumber, adminUser));
    dispatch(loginSuccessful('Aakash', '123', false));
    dispatch(hideModal());
  },
  dispatchSignup: (username, password, contactNumber, adminUser, adminToken) => {
    dispatch(signup(username, password, contactNumber, adminUser, adminToken));
    dispatch(hideModal());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppShell));
