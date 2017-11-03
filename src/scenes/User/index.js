import User from './User';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchUser,
  fetchUserSuccessful,
  fetchUserFailed,
  changeUserStatus,
  changeUserStatusSuccessful,
  changeUserStatusFailed,
  makeEmployee,
  makeEmployeeSuccessful,
  makeEmployeeFailed,
  searchUser,
  searchUserSuccessful,
  searchUserFailed,
} from './action';
import { openSnackBar, logout } from '../../components/AppShell/action';
import { fetchUserApi, changeUserStatusApi, makeEmployeeApi, searchUserApi } from './api.User';

const mapStateToProps = state => ({
  userId: state.appshell.userId,
  ...state.user,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchUser: () => {
    dispatch(fetchUser());
    fetchUserApi()
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(openSnackBar('Fetch Operation Successful'));
          dispatch(fetchUserSuccessful(data.userList));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(fetchUserFailed);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  dispatchMakeEmployee: data => {
    dispatch(makeEmployee());
    makeEmployeeApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          dispatch(openSnackBar('New Employee Added!'));
          dispatch(makeEmployeeSuccessful(data.userList));
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(makeEmployeeFailed());
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  dispatchChangeUserStatus: (data, userId) => {
    const userIdChanged = data.userId;
    dispatch(changeUserStatus());
    changeUserStatusApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          console.log(data);
          dispatch(openSnackBar('User Status Changed'));
          dispatch(fetchUserSuccessful(data.userList));
          if (userId === userIdChanged) {
            dispatch(logout());
          }
        } else {
          dispatch(openSnackBar(data.error));
          dispatch(fetchUserFailed);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
