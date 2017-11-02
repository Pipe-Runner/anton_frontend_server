import api from '../../api';

export const fetchInventoryApi = data =>
  fetch(`${api}/inventory/fetchall`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const addPartsToBillApi = data =>
  fetch(`${api}/inventory/addpartstobill`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

export const searchPartsApi = data =>
  fetch(`${api}/inventory/fetchall`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

export const fetchSoldCountApi = () =>
  fetch(`${api}/inventory/fetchsoldcount`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
