import {
  FETCH_TRANSACTION,
  FETCH_TRANSACTION_SUCCESSFUL,
  FETCH_TRANSACTION_FAILED,
  SEARCH_TRANSACTION,
  SEARCH_TRANSACTION_SUCCESSFUL,
  SEARCH_TRANSACTION_FAILED,
} from './action';

const defaultState = {};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTION:
      return { ...state, fetchingData: true };

    case FETCH_TRANSACTION_SUCCESSFUL:
      return { ...state, fetchingData: false, transactionTableData: action.payload };

    case FETCH_TRANSACTION_FAILED:
      return { ...state, fetchingData: false };

    case SEARCH_TRANSACTION:
      return { ...state, searchingTransaction: true };

    case SEARCH_TRANSACTION_SUCCESSFUL:
      return { ...state, searchingTransaction: false, transactionTableData: action.payload };

    case SEARCH_TRANSACTION_FAILED:
      return { ...state, searchingTransaction: false };

    default:
      return { ...state };
  }
};

export default reducer;
