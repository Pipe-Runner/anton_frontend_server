import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export const SignupButton = ({ modalTitle, data, modalFunction, reset }) => (
  <FlatButton
    label={modalTitle}
    primary={true}
    onClick={() => {
      modalFunction(data.username, data.password, data.contactNumber, data.adminToken);
      reset();
    }}
  />
);

export const LoginButton = ({ modalTitle, data, modalFunction, reset }) => (
  <FlatButton
    label={modalTitle}
    primary={true}
    onClick={() => {
      modalFunction(data.username, data.password, data.contactNumber, data.isAdmin);
      reset();
    }}
  />
);
