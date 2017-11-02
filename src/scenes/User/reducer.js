import {
  FETCH_USER,
  FETCH_USER_SUCCESSFUL,
  FETCH_USER_FAILED,
  CHANGE_USER_STATUS,
  CHANGE_USER_STATUS_SUCCESSFUL,
  CHANGE_USER_STATUS_FAILED,
  MAKE_EMPLOYEE,
  MAKE_EMPLOYEE_SUCCESSFUL,
  MAKE_EMPLOYEE_FAILED,
  SEARCH_USER,
  SEARCH_USER_SUCCESSFUL,
  SEARCH_USER_FAILED,
} from './action';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, fetchingData: true };

    case FETCH_USER_SUCCESSFUL:
      return { ...state, fetchingData: false, userTableData: action.payload };

    case FETCH_USER_FAILED:
      return { ...state, fetchingData: false };

    case CHANGE_USER_STATUS:
      return { ...state, fetchingData: true };

    case CHANGE_USER_STATUS_SUCCESSFUL:
      return { ...state, fetchingData: false, userTableData: action.payload };

    case CHANGE_USER_STATUS_FAILED:
      return { ...state, fetchingData: false };

    case MAKE_EMPLOYEE:
      return { ...state, fetchingData: true };

    case MAKE_EMPLOYEE_SUCCESSFUL:
      return { ...state, fetchingData: false, userTableData: action.payload };

    case MAKE_EMPLOYEE_FAILED:
      return { ...state, fetchingData: false };

    case SEARCH_USER:
      return { ...state, searchingUser: true };

    case SEARCH_USER_SUCCESSFUL:
      return { ...state, searchingUser: false, userTableData: action.payload };

    case SEARCH_USER_FAILED:
      return { ...state, searchingUser: false };

    default:
      return { ...state };
  }
};

export default reducer;
