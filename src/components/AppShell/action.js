export const SHOW_MODAL = 'APPSHELL/SHOW_MODAL';
export const HIDE_MODAL = 'APPSHELL/HIDE_MODAL';
export const SHOW_ERROR = 'APPSHELL/SHOW_ERROR';
export const HIDE_ERROR = 'APPSHELL/HIDE_ERROR';
export const LOGIN = 'APPSHELL/LOGIN';
export const LOGIN_SUCCESSFUL = 'APPSHELL/LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'APPSHELL/LOGIN_FAILED';
export const LOGOUT = 'APPSHELL/LOGOUT';
export const SIGNUP = 'APPSHELL/SIGNUP';
export const SIGNUP_SUCCESSFUL = 'APPSHELL/SIGNUP_SUCCESSFUL';
export const SIGNUP_FAILED = 'APPSHELL/SIGNUP_FAILED';
export const OPEN_SNACK_BAR = 'APPSHELL/OPEN_SNACK_BAR';
export const RESET_SNACK_BAR = 'APPSHELL/RESET_SNACK_BAR';

export const showModal = (title, type, actionFunction) => ({
  type: SHOW_MODAL,
  payload: { title, type, actionFunction },
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const login = () => ({
  type: LOGIN,
});

export const loginSuccessful = (
  fullName,
  emailId,
  userId,
  contactNumber,
  userLevel,
  employeeId
) => ({
  type: LOGIN_SUCCESSFUL,
  payload: { fullName, emailId, userId, contactNumber, userLevel, employeeId },
});

export const loginFailed = () => ({
  type: LOGIN_FAILED,
});

export const logout = () => ({
  type: LOGOUT,
});

export const signup = () => ({
  type: SIGNUP,
});

export const signupSuccessful = () => ({
  type: SIGNUP_SUCCESSFUL,
});

export const signupFailed = () => ({
  type: SIGNUP_FAILED,
});

export const openSnackBar = message => ({
  type: OPEN_SNACK_BAR,
  payload: { message },
});

export const resetSnackBar = () => ({
  type: RESET_SNACK_BAR,
});
