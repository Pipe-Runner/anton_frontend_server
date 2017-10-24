import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export const LoginButton = ({ modalTitle, data, modalFunction }) => (
  <FlatButton
    label={modalTitle}
    primary={true}
    onClick={() => {
      modalFunction(data.username, data.password, data.contactNumber, data.adminLogin);
    }}
  />
);

export const SignupButton = ({ modalTitle, data, modalFunction }) => (
  <FlatButton
    label={modalTitle}
    primary={true}
    onClick={() => {
      modalFunction(data.username, data.password, data.contactNumber, data.adminLogin);
    }}
  />
);
