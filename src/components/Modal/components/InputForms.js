import React from 'react';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import { FieldContainer, TextWrapper, CheckBoxWrapper } from '../styles.Modal';

export const LoginForm = ({
  username,
  password,
  contactNumber,
  adminLogin,
  onTextFieldChange,
  adminToggle,
}) => (
  <FieldContainer>
    <TextWrapper>
      <TextField
        onChange={onTextFieldChange('username')}
        value={username}
        fullWidth
        floatingLabelText="Username"
      />
      <br />
      <TextField
        onChange={onTextFieldChange('password')}
        value={password}
        fullWidth
        floatingLabelText="Password"
      />
      <br />
      <TextField
        onChange={onTextFieldChange('contactNumber')}
        value={contactNumber}
        fullWidth
        floatingLabelText="Contact Number"
      />
      <br />
    </TextWrapper>
    <CheckBoxWrapper>
      <Toggle style={{ margin: '14px 0px 0px 0px' }} onToggle={adminToggle} label="Admin Login" />
    </CheckBoxWrapper>
  </FieldContainer>
);

export const SignupForm = ({
  username,
  password,
  contactNumber,
  adminSignup,
  onTextFieldChange,
  adminToken,
}) => (
  <FieldContainer>
    <TextWrapper>
      <TextField
        onChange={onTextFieldChange('username')}
        value={username}
        fullWidth
        floatingLabelText="Username"
      />
      <br />
      <TextField
        onChange={onTextFieldChange('password')}
        value={password}
        fullWidth
        floatingLabelText="Password"
      />
      <br />
      <TextField
        onChange={onTextFieldChange('contactNumber')}
        value={contactNumber}
        fullWidth
        floatingLabelText="Contact Number"
      />
      <br />
      <TextField
        onChange={onTextFieldChange('adminToken')}
        value={adminToken}
        fullWidth
        floatingLabelText="Admin Token"
      />
    </TextWrapper>
  </FieldContainer>
);
