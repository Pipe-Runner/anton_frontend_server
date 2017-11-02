export const FETCH_USER = 'USER/FETCH_USER';
export const FETCH_USER_SUCCESSFUL = 'USER/FETCH_USER_SUCCESSFUL';
export const FETCH_USER_FAILED = 'USER/FETCH_USER_FAILED';
export const CHANGE_USER_STATUS = 'USER/CHANGE_USER_STATUS';
export const CHANGE_USER_STATUS_SUCCESSFUL = 'USER/CHANGE_USER_STATUS_SUCCESSFUL';
export const CHANGE_USER_STATUS_FAILED = 'USER/CHANGE_USER_STATUS_FAILED';
export const MAKE_EMPLOYEE = 'USER/MAKE_EMPLOYEE';
export const MAKE_EMPLOYEE_SUCCESSFUL = 'USER/MAKE_EMPLOYEE_SUCCESSFUL';
export const MAKE_EMPLOYEE_FAILED = 'USER/MAKE_EMPLOYEE_FAILED';
export const SEARCH_USER = 'USER/SEARCH_USER';
export const SEARCH_USER_SUCCESSFUL = 'USER/SEARCH_USER_SUCCESSFUL';
export const SEARCH_USER_FAILED = 'USER/SEARCH_USER_FAILED';

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const fetchUserSuccessful = response => ({
  type: FETCH_USER_SUCCESSFUL,
  payload: response,
});

export const fetchUserFailed = () => ({
  type: FETCH_USER_FAILED,
});

export const changeUserStatus = () => ({
  type: FETCH_USER,
});

export const changeUserStatusSuccessful = response => ({
  type: FETCH_USER_SUCCESSFUL,
  payload: response,
});

export const changeUserStatusFailed = () => ({
  type: FETCH_USER_FAILED,
});

export const makeEmployee = () => ({
  type: MAKE_EMPLOYEE,
});

export const makeEmployeeSuccessful = response => ({
  type: MAKE_EMPLOYEE_SUCCESSFUL,
  payload: response,
});

export const makeEmployeeFailed = () => ({
  type: MAKE_EMPLOYEE_FAILED,
});

export const searchParts = () => ({
  type: SEARCH_USER,
});

export const searchPartsSuccessful = response => ({
  type: SEARCH_USER_SUCCESSFUL,
  payload: response,
});

export const searchPartsFailed = response => ({
  type: SEARCH_USER_FAILED,
});
