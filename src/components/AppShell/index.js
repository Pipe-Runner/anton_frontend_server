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
  openSnackBar,
  resetSnackBar,
} from './action';
import { signupApi, loginApi } from './api.AppShell';

const mapStateToProps = state => ({
  ...state.appshell,
  loadingInventoryData: state.inventory.fetchingData || state.inventory.addingPartsToBill,
  loadingTransactionData: state.transaction.fetchingData,
  loadingBookingListData: state.bookingList.fetchingData || state.bookingList.changingBookingStatus,
  loadingHistoryData: state.history.fetchingData,
  loadingAddData:
    state.add.addingSupplier ||
    state.add.addingItem ||
    state.add.addingVehicle ||
    state.add.fetchingSupplierList ||
    state.add.fetchingVehicleList,
  loadingUserData: state.user.fetchingData,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: (emailId, password, contactNumber) => {
    dispatch(login());
    dispatch(openSnackBar(`Verifying, Please wait!`));
    const data = { emailId, password, contactNumber };
    console.log(data);
    loginApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        console.log(data);
        if (data.code === '200' && data.error === 'none') {
          dispatch(openSnackBar(`Welcome ${data.fullName}!`));
          dispatch(hideModal());
          console.log(data);
          dispatch(
            loginSuccessful(
              data.fullName,
              data.emailId,
              data.userId,
              data.contactNumber,
              data.userLevel,
              data.employeeId
            )
          );
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(loginFailed());
        }
      })
      .catch(error => {
        dispatch(openSnackBar('Error in fetch operation'));
        dispatch(loginFailed());
      });
  },
  dispatchSignup: (fullName, emailId, password, contactNumber) => {
    dispatch(signup());
    dispatch(openSnackBar(`Setting things up, Please wait!`));
    const data = { fullName, emailId, password, contactNumber };
    signupApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(openSnackBar('Signup Successful!'));
          dispatch(hideModal());
          dispatch(signupSuccessful());
          dispatch(
            loginSuccessful(
              data.fullName,
              data.emailId,
              data.userId,
              data.contactNumber,
              data.userLevel
            )
          );
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(signupFailed());
        }
      })
      .catch(error => {
        dispatch(openSnackBar('Error in fetch operation'));
        dispatch(signupFailed());
      });
  },
  dispatchShowModal: (title, type, actionFunction) => {
    dispatch(showModal(title, type, actionFunction));
  },
  dispatchLogout: () => {
    dispatch(openSnackBar('Logout Successful!'));
    dispatch(logout());
  },
  dispatchResetSnackBar: () => {
    dispatch(resetSnackBar());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppShell));
