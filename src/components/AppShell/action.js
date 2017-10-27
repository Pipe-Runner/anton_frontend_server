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

export const showModal = (title, type, actionFunction) => ({
  type: SHOW_MODAL,
  payload: { title, type, actionFunction },
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const showError = (errorText, timeout) => ({
  type: SHOW_ERROR,
  payload: { errorText, timeout },
});

export const hideError = () => ({
  type: HIDE_ERROR,
});

export const login = () => ({
  type: LOGIN,
});

export const loginSuccessful = (username, isAdmin) => ({
  type: LOGIN_SUCCESSFUL,
  payload: { username, isAdmin },
});

export const loginFailed = () => ({
  type: LOGIN_FAILED,
});

export const logout = () => ({
  type: LOGOUT,
});

export const signup = (username, password, contactNumber, adminUser, adminToken) => ({
  type: SIGNUP,
  payload: { username, password, adminUser, contactNumber, adminToken },
});

export const signupSuccessful = (username, token, adminUser, contactNumber) => ({
  type: SIGNUP_SUCCESSFUL,
});

export const signupFailed = () => ({
  type: SIGNUP_FAILED,
});
