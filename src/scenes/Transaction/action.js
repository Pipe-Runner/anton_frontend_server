export const FETCH_TRANSACTION = 'TRANSACTION/FETCH_TRANSACTION';
export const FETCH_TRANSACTION_SUCCESSFUL = 'TRANSACTION/FETCH_TRANSACTION_SUCCESSFUL';
export const FETCH_TRANSACTION_FAILED = 'TRANSACTION/FETCH_TRANSACTION_FAILED';
export const SEARCH_TRANSACTION = 'INVENTORY/SEARCH_TRANSACTION';
export const SEARCH_TRANSACTION_SUCCESSFUL = 'INVENTORY/SEARCH_TRANSACTION_SUCCESSFUL';
export const SEARCH_TRANSACTION_FAILED = 'INVENTORY/SEARCH_TRANSACTION_FAILED';

export const fetchTransaction = () => ({
  type: FETCH_TRANSACTION,
});

export const fetchTransactionSuccessful = response => ({
  type: FETCH_TRANSACTION_SUCCESSFUL,
  payload: response,
});

export const fetchTransactionFailed = () => ({
  type: FETCH_TRANSACTION_FAILED,
});

export const searchTransaction = () => ({
  type: SEARCH_TRANSACTION,
});

export const searchTransactionSuccessful = response => ({
  type: SEARCH_TRANSACTION_SUCCESSFUL,
  payload: response,
});

export const searchTransactionFailed = response => ({
  type: SEARCH_TRANSACTION_FAILED,
});
