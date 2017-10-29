import api from '../../api';

export const getBookingsApi = data =>
  fetch(`${api}/booking/fetchbycredentials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

export const verifybookingdata1Api = data =>
  fetch(`${api}/booking/verifydata1/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

export const submitBookingDataApi = data =>
  fetch(`${api}/booking/submitbookingdata/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
