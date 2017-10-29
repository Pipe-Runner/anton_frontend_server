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
  OPEN_SNACK_BAR,
  RESET_SNACK_BAR,
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
        userId: action.payload.userId,
        fullName: action.payload.fullName,
        emailId: action.payload.emailId,
        contactNumber: action.payload.contactNumber,
        userLevel: action.payload.userLevel,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loginDataLoading: false,
      };

    case LOGOUT:
      return {
        ...state,
        fullName: undefined,
        userId: undefined,
        emailId: undefined,
        userLevel: undefined,
        contactNumber: undefined,
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
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        signupDataLoading: true,
      };

    case OPEN_SNACK_BAR:
      return {
        ...state,
        isSnackBarOpen: true,
        snackBarMessage: action.payload.message,
      };

    case RESET_SNACK_BAR:
      return {
        ...state,
        isSnackBarOpen: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
