import {
  FETCH_USER,
  FETCH_USER_SUCCESSFUL,
  FETCH_USER_FAILED,
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
