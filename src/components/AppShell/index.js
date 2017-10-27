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
  signupSuccessful,
  signupFailed,
  logout,
} from './action';
import { signupApi, loginApi } from './api.AppShell';

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
  dispatchLogin: (username, password, contactNumber, isAdmin) => {
    dispatch(login());
    const data = { username, password, contactNumber, isAdmin };
    loginApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          console.log('successful login');
          dispatch(hideModal());
          dispatch(loginSuccessful(data.username, data.isAdmin));
        } else {
          console.log(data.error);
          dispatch(loginFailed());
        }
      });

    // remove when deployed
    dispatch(loginSuccessful('aakash', true));
    dispatch(hideModal());
  },
  dispatchSignup: (username, password, contactNumber, adminToken) => {
    dispatch(signup());
    const data = { username, passwordHash: password, contactNumber, adminToken };
    console.log(data);
    signupApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          console.log('successful Signup');
          dispatch(hideModal());
          dispatch(signupSuccessful());
          console.log(adminToken);
          dispatch(loginSuccessful(username, adminToken !== ''));
        } else {
          console.log(data.error);
          dispatch(signupFailed());
        }
      })
      .catch(error => {
        console.log('Error in fetch operation');
        dispatch(signupFailed());
      });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppShell));
