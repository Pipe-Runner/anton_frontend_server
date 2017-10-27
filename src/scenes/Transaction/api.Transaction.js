export const fetchTransactionApi = data =>
  fetch('http://127.0.0.1:4000/transaction/fetchtransaction', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const searchTransactionApi = data =>
  fetch('http://127.0.0.1:4000/transaction/searchtransaction/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
