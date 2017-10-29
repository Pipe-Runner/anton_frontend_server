import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { LoginButton, SignupButton } from './components/ActionButtons';
import { LoginForm, SignupForm } from './components/InputForms';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      fullNameError: undefined,
      emailId: '',
      emailIdError: undefined,
      password: '',
      passwordError: undefined,
      contactNumber: '',
      contactNumberError: undefined,
    };
  }

  checkAndSubmit = type => {
    let isDirty = false;
    let fullNameError = undefined;
    let emailIdError = undefined;
    let passwordError = undefined;
    let contactNumberError = undefined;

    switch (type) {
      case 'SIGNUP':
        return () => {
          if (this.state.fullName === '') {
            fullNameError = 'Name cannot be empty';
            isDirty = true;
          }
          if (this.state.password === '') {
            passwordError = 'Paswword cannot be empty';
            isDirty = true;
          }
          if (this.state.contactNumber === '') {
            contactNumberError = 'Contact Number cannot be empty';
            isDirty = true;
          }
          if (this.state.emailId === '') {
            emailIdError = 'Email ID cannot be empty';
            isDirty = true;
          }
          if (!isDirty) {
            this.props.modalFunction(
              this.state.fullName,
              this.state.emailId,
              this.state.password,
              this.state.contactNumber
            );
            this.reset();
          } else {
            this.setState({
              ...this.state,
              fullNameError,
              passwordError,
              emailIdError,
              contactNumberError,
            });
          }
        };
        break;
      case 'LOGIN':
        return () => {
          if (this.state.password === '') {
            passwordError = 'Paswword cannot be empty';
            isDirty = true;
          }
          if (this.state.contactNumber === '') {
            contactNumberError = 'Contact Number cannot be empty';
            isDirty = true;
          }
          if (this.state.emailId === '') {
            emailIdError = 'Email ID cannot be empty';
            isDirty = true;
          }
          if (!isDirty) {
            this.props.modalFunction(
              this.state.emailId,
              this.state.password,
              this.state.contactNumber
            );
            this.reset();
          } else {
            this.setState({
              ...this.state,
              fullNameError,
              passwordError,
              emailIdError,
              contactNumberError,
            });
          }
        };
        break;
      default:
        break;
    }
  };

  reset = () => {
    this.setState({
      fullName: '',
      fullNameError: undefined,
      emailId: '',
      emailIdError: undefined,
      password: '',
      passwordError: undefined,
      contactNumber: '',
      contactNumberError: undefined,
    });
  };

  hideAndReset = () => {
    this.reset();
    this.props.dispatchHideModal();
  };

  onTextFieldChange = fieldName => (event, newValue) => {
    this.setState(state => ({ ...state, [fieldName]: newValue }));
  };

  fieldsRenderer = modalType => {
    switch (modalType) {
      case 'SIGNUP': {
        return (
          <SignupForm
            fullName={this.state.fullName}
            fullNameError={this.state.fullNameError}
            emailId={this.state.emailId}
            emailIdError={this.state.emailIdError}
            password={this.state.password}
            passwordError={this.state.passwordError}
            contactNumber={this.state.contactNumber}
            contactNumberError={this.state.contactNumberError}
            onTextFieldChange={this.onTextFieldChange}
          />
        );
      }
      case 'LOGIN': {
        return (
          <LoginForm
            emailId={this.state.emailId}
            emailIdError={this.state.emailIdError}
            password={this.state.password}
            passwordError={this.state.passwordError}
            contactNumber={this.state.contactNumber}
            contactNumberError={this.state.contactNumberError}
            onTextFieldChange={this.onTextFieldChange}
          />
        );
      }
      default: {
        return undefined;
      }
    }
  };

  actionButtonRenderer = (modalTitle, modalType, modalFunction, data, reset) => {
    switch (modalType) {
      case 'SIGNUP':
        return (
          <SignupButton
            modalTitle={modalTitle}
            modalFunction={modalFunction}
            data={data}
            reset={reset}
            checkAndSubmit={this.checkAndSubmit}
          />
        );
      case 'LOGIN':
        return (
          <LoginButton
            modalTitle={modalTitle}
            modalFunction={modalFunction}
            data={data}
            reset={reset}
            checkAndSubmit={this.checkAndSubmit}
          />
        );
      default: {
        return undefined;
      }
    }
  };

  render() {
    const { modalShown, modalTitle, modalType } = this.props;

    return (
      <Dialog
        title={modalTitle || 'random'}
        actions={[
          <FlatButton label="Cancel" primary={true} onClick={this.hideAndReset} />,
          this.actionButtonRenderer(modalTitle, modalType),
        ]}
        modal={true}
        open={modalShown || false}
        onRequestClose={this.hideAndReset}
      >
        {this.fieldsRenderer(modalType)}
      </Dialog>
    );
  }
}

export default Modal;
