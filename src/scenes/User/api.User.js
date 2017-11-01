export const fetchUserApi = data =>
  fetch('http://127.0.0.1:4000/inventory/fetchinventory', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const searchUserApi = data =>
  fetch('http://127.0.0.1:4000/inventory/searchparts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
