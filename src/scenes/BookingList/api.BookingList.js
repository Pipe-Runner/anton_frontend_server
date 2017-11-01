import api from '../../api';

export const fetchPendingBookingApi = data =>
  fetch(`${api}/booking/fetchpendingbooking`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const changeBookingStatusApi = data =>
  fetch(`${api}/booking/changebookingstatus`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
