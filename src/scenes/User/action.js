export const FETCH_USER = 'USER/FETCH_USER';
export const FETCH_USER_SUCCESSFUL = 'USER/FETCH_USER_SUCCESSFUL';
export const FETCH_USER_FAILED = 'USER/FETCH_USER_FAILED';
export const SEARCH_USER = 'USER/SEARCH_USER';
export const SEARCH_USER_SUCCESSFUL = 'USER/SEARCH_USER_SUCCESSFUL';
export const SEARCH_USER_FAILED = 'USER/SEARCH_USER_FAILED';

export const fetchuser = () => ({
  type: FETCH_USER,
});

export const fetchUserSuccessful = response => ({
  type: FETCH_USER_SUCCESSFUL,
  payload: response,
});

export const fetchUserFailed = () => ({
  type: FETCH_USER_FAILED,
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
