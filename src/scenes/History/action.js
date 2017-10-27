export const FETCH_HISTORY = 'HISTORY/FETCH_HISTORY';
export const FETCH_HISTORY_SUCCESSFUL = 'HISTORY/FETCH_HISTORY_SUCCESSFUL';
export const FETCH_HISTORY_FAILED = 'HISTORY/FETCH_HISTORY_FAILED';
export const SEARCH_HISTORY = 'HISTORY/SEARCH_HISTORY';
export const SEARCH_HISTORY_SUCCESSFUL = 'HISTORY/SEARCH_HISTORY_SUCCESSFUL';
export const SEARCH_HISTORY_FAILED = 'HISTORY/SEARCH_HISTORY_FAILED';

export const fetchHistory = () => ({
  type: FETCH_HISTORY,
});

export const fetchHistorySuccessful = response => ({
  type: FETCH_HISTORY_SUCCESSFUL,
  payload: response,
});

export const fetchHistoryFailed = () => ({
  type: FETCH_HISTORY_FAILED,
});

export const searchHistory = () => ({
  type: SEARCH_HISTORY,
});

export const searchHistorySuccessful = response => ({
  type: SEARCH_HISTORY_SUCCESSFUL,
  payload: response,
});

export const searchHistoryFailed = response => ({
  type: SEARCH_HISTORY_FAILED,
});
