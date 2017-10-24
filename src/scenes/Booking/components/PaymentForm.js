import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AcceptButton from 'react-icons/lib/fa/play';
import RejectButton from 'react-icons/lib/ti/cancel';
import { FormContainer, Spacer, ButtonContainer } from './styles';

const PaymentForm = ({ onChange, handleNext, handlePrev }) => (
  <FormContainer>
    <TextField onChange={onChange('cardOwner')} hintText="Name" fullWidth={true} />
    <TextField onChange={onChange('cardNumber')} hintText="Customer ID" fullWidth={true} />
    <TextField onChange={onChange('cvv')} hintText="Car Name" fullWidth={true} />
    <TextField onChange={onChange('expiryDate')} hintText="Phone Number" fullWidth={true} />
    <Spacer />
    <ButtonContainer>
      <FlatButton
        backgroundColor="#F50057"
        hoverColor="#FF4081"
        icon={<RejectButton color={'#ffffff'} />}
        onClick={handlePrev}
      />
      <FlatButton
        style={{ margin: '0px 0px 0px 16px' }}
        backgroundColor="#a4c639"
        hoverColor="#8AA62F"
        icon={<AcceptButton color={'#ffffff'} />}
        onClick={handleNext}
      />
    </ButtonContainer>
  </FormContainer>
);

export default PaymentForm;
