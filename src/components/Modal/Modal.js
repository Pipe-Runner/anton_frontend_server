import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { LoginButton, SignupButton } from './components/ActionButtons';
import { LoginForm, SignupForm } from './components/InputForms';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  actionButtonRenderer = (modalTitle, modalType, modalFunction, data) => {
    switch (modalType) {
      case 'LOGIN':
        return <LoginButton modalTitle={modalTitle} modalFunction={modalFunction} data={data} />;
      case 'SIGNUP':
        return <SignupButton modalTitle={modalTitle} modalFunction={modalFunction} data={data} />;
      default: {
        return undefined;
      }
    }
  };

  adminToggle = (event, isInputChecked) => {
    this.setState(state => ({
      ...state,
      adminLogin: isInputChecked,
    }));
  };

  onTextFieldChange = fieldName => (event, newValue) =>
    this.setState(state => ({ ...state, [fieldName]: newValue }));

  fieldsRenderer = modalType => {
    switch (modalType) {
      case 'LOGIN': {
        return (
          <LoginForm
            username={this.state.username}
            password={this.state.password}
            contactNumber={this.state.contactNumber}
            adminLogin={this.adminLogin}
            onTextFieldChange={this.onTextFieldChange}
            adminToggle={this.adminToggle}
          />
        );
      }
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
          this.actionButtonRenderer(modalTitle, modalType, modalFunction, this.state),
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
