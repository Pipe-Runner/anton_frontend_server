export const signupApi = data =>
  fetch('http://127.0.0.1:4000/customers/signup/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

export const loginApi = data =>
  fetch('http://127.0.0.1:4000/customers/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
