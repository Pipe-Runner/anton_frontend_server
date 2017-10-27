export const fetchInventoryApi = data =>
  fetch('http://127.0.0.1:4000/inventory/fetchinventory', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const addPartsToBillApi = data =>
  fetch('http://127.0.0.1:4000/inventory/addpartstobill/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

export const searchPartsApi = data =>
  fetch('http://127.0.0.1:4000/inventory/searchparts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
