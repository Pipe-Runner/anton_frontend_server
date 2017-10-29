import api from '../../api';

export const fetchTransactionApi = data =>
  fetch(`${api}/transaction/fetchall`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const searchTransactionApi = data =>
  fetch('http://127.0.0.1:4000/transactions/searchtransactions/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
