import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { LoginButton, SignupButton } from './components/ActionButtons';
import { LoginForm, SignupForm } from './components/InputForms';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      contactNumber: '',
      adminToken: '',
      isAdmin: false,
    };
  }

  actionButtonRenderer = (modalTitle, modalType, modalFunction, data, reset) => {
    switch (modalType) {
      case 'LOGIN':
        return (
          <LoginButton
            modalTitle={modalTitle}
            modalFunction={modalFunction}
            data={data}
            reset={reset}
          />
        );
      case 'SIGNUP':
        return (
          <SignupButton
            modalTitle={modalTitle}
            modalFunction={modalFunction}
            data={data}
            reset={reset}
          />
        );
      default: {
        return undefined;
      }
    }
  };

  adminToggle = (event, isInputChecked) => {
    this.setState(state => ({
      ...state,
      isAdmin: isInputChecked,
    }));
  };

  reset = () => {
    this.setState({
      username: '',
      password: '',
      contactNumber: '',
      adminToken: '',
      isAdmin: false,
    });
  };

  onTextFieldChange = fieldName => (event, newValue) => {
    this.setState(state => ({ ...state, [fieldName]: newValue }));
  };

  fieldsRenderer = modalType => {
    switch (modalType) {
      case 'SIGNUP': {
        return (
          <SignupForm
            username={this.state.username}
            password={this.state.password}
            contactNumber={this.contactNumber}
            adminToken={this.state.adminToken}
            onTextFieldChange={this.onTextFieldChange}
          />
        );
      }
      case 'LOGIN': {
        return (
          <LoginForm
            username={this.state.username}
            password={this.state.password}
            contactNumber={this.state.contactNumber}
            isAdmin={this.state.isAdmin}
            onTextFieldChange={this.onTextFieldChange}
            adminToggle={this.adminToggle}
          />
        );
      }
      default: {
        return undefined;
      }
    }
  };

  render() {
    const { modalShown, modalTitle, modalType, modalFunction, dispatchHideModal } = this.props;

    return (
      <Dialog
        title={modalTitle || 'random'}
        actions={[
          <FlatButton label="Cancel" primary={true} onClick={dispatchHideModal} />,
          this.actionButtonRenderer(modalTitle, modalType, modalFunction, this.state, this.reset),
        ]}
        modal={true}
        open={modalShown || false}
        onRequestClose={dispatchHideModal}
      >
        {this.fieldsRenderer(modalType)}
      </Dialog>
    );
  }
}

export default Modal;
