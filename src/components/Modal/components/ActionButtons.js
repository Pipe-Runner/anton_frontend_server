import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export const SignupButton = ({ modalTitle, checkAndSubmit }) => (
  <FlatButton
    label={modalTitle}
    primary={true}
    onClick={event => {
      event.preventDefault();
      checkAndSubmit('SIGNUP')();
    }}
  />
);

export const LoginButton = ({ modalTitle, checkAndSubmit }) => (
  <FlatButton
    label={modalTitle}
    primary={true}
    onClick={event => {
      event.preventDefault();
      checkAndSubmit('LOGIN')();
    }}
  />
);
