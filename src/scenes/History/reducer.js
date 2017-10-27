import {
  FETCH_HISTORY,
  FETCH_HISTORY_SUCCESSFUL,
  FETCH_HISTORY_FAILED,
  SEARCH_HISTORY,
  SEARCH_HISTORY_SUCCESSFUL,
  SEARCH_HISTORY_FAILED,
} from './action';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_HISTORY:
      return { ...state, fetchingData: true };

    case FETCH_HISTORY_SUCCESSFUL:
      return { ...state, fetchingData: false, historyTableData: action.payload };

    case FETCH_HISTORY_FAILED:
      return { ...state, fetchingData: false };

    case SEARCH_HISTORY:
      return { ...state, searchingHistory: true };

    case SEARCH_HISTORY_SUCCESSFUL:
      return { ...state, searchingHistory: false, HistoryTableData: action.payload };

    case SEARCH_HISTORY_FAILED:
      return { ...state, searchingHistory: false };

    default:
      return { ...state };
  }
};

export default reducer;
