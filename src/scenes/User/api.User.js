import api from '../../api';

export const fetchUserApi = () =>
  fetch(`${api}/user/fetchall`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const makeEmployeeApi = data =>
  fetch(`${api}/user/makeemployee/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

export const changeUserStatusApi = data =>
  fetch(`${api}/user/changeuserstatus/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

export const searchUserApi = data =>
  fetch(`${api}/inventory/searchparts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
