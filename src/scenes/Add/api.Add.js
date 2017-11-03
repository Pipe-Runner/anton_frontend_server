import api from '../../api';

export const fetchSupplierListApi = () =>
  fetch(`${api}/supplier/fetchall`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const fetchVehicleListApi = () =>
  fetch(`${api}/vehicle/fetchall`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export const addItemApi = data =>
  fetch(`${api}/inventory/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

export const addSupplierApi = data =>
  fetch(`${api}/supplier/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

export const addVehicleApi = data =>
  fetch(`${api}/vehicle/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
