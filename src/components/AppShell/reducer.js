import {
  SHOW_MODAL,
  HIDE_MODAL,
  SHOW_ERROR,
  HIDE_ERROR,
  LOGIN,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGOUT,
  SIGNUP,
  SIGNUP_SUCCESSFUL,
  SIGNUP_FAILED,
} from './action';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalShown: true,
        modalDetails: {
          modalTitle: action.payload.title,
          modalType: action.payload.type,
          modalFunction: action.payload.actionFunction,
        },
      };

    case HIDE_MODAL:
      return { ...state, modalShown: false, modalDetails: undefined };

    case SHOW_ERROR:
      return { ...state, errorShown: true };

    case HIDE_ERROR:
      return { ...state, errorShown: false };

    case LOGIN:
      return {
        ...state,
        loginDataLoading: true,
      };

    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        loginDataLoading: false,
        signupDataLoading: false,
        username: action.payload.username,
        token: action.payload.token,
        adminUser: action.payload.adminUser,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loginDataLoading: false,
      };

    case LOGOUT:
      return {
        ...state,
        username: undefined,
        token: undefined,
        adminUser: undefined,
      };

    case SIGNUP:
      return {
        ...state,
        signupDataLoading: true,
      };

    case SIGNUP_SUCCESSFUL:
      return {
        ...state,
        signupDataLoading: false,
        loginDataLoading: false,
        username: action.payload.username,
        token: action.payload.token,
        adminUser: action.payload.adminUser,
        contactNumber: action.payload.contactNumber,
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        signupDataLoading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
