import React from 'react';
import TextField from 'material-ui/TextField';
// import Toggle from 'material-ui/Toggle';
import { FieldContainer } from '../styles.Modal';

export const SignupForm = ({
  fullName,
  fullNameError,
  emailId,
  emailIdError,
  password,
  passwordError,
  contactNumber,
  contactNumberError,
  onTextFieldChange,
}) => (
  <FieldContainer>
    <TextField
      onChange={onTextFieldChange('fullName')}
      errorText={fullNameError}
      value={fullName}
      fullWidth
      floatingLabelText="Full Name"
    />
    <br />
    <TextField
      onChange={onTextFieldChange('emailId')}
      errorText={emailIdError}
      value={emailId}
      fullWidth
      floatingLabelText="Email ID"
    />
    <br />
    <TextField
      onChange={onTextFieldChange('password')}
      errorText={passwordError}
      value={password}
      type="password"
      fullWidth
      floatingLabelText="Password"
    />
    <br />
    <TextField
      onChange={onTextFieldChange('contactNumber')}
      errorText={contactNumberError}
      value={contactNumber}
      fullWidth
      floatingLabelText="Contact Number"
    />
  </FieldContainer>
);

export const LoginForm = ({
  emailId,
  emailIdError,
  password,
  passwordError,
  contactNumber,
  contactNumberError,
  onTextFieldChange,
}) => (
  <FieldContainer>
    <TextField
      onChange={onTextFieldChange('emailId')}
      errorText={emailIdError}
      value={emailId}
      fullWidth
      floatingLabelText="Email ID"
    />
    <br />
    <TextField
      onChange={onTextFieldChange('password')}
      errorText={passwordError}
      value={password}
      type="password"
      fullWidth
      floatingLabelText="Password"
    />
    <br />
    <TextField
      onChange={onTextFieldChange('contactNumber')}
      errorText={contactNumberError}
      value={contactNumber}
      fullWidth
      floatingLabelText="Contact Number"
    />
  </FieldContainer>
);
