import api from '../../api';

export const fetchHistoryApi = data =>
  fetch(`${api}/history/fetchall`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const searchHistoryApi = data =>
  fetch(`${api}/history/searchhistory/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
