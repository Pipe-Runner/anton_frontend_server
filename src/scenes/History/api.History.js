export const fetchHistoryApi = data =>
  fetch('http://127.0.0.1:4000/history/fetchhistory', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const searchHistoryApi = data =>
  fetch('http://127.0.0.1:4000/history/searchhistory/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
