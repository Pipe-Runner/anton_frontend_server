import User from './User';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchUser,
  fetchUserSuccessful,
  fetchUserFailed,
  searchUser,
  searchUserSuccessful,
  searchUserFailed,
} from './action';
import { fetchUserApi } from './api.User';

const mapStateToProps = state => ({
  ...state.user,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchUser: filterData => {},
  dispatchSeachParts: (fuelType, manufacturer) => {
    // search for parts
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
