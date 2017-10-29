import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AcceptButton from 'react-icons/lib/fa/play';
import RejectButton from 'react-icons/lib/ti/cancel';
import { FormContainer, Spacer, ButtonContainer, PaymentInfoWrapper } from './styles';

const PaymentForm = ({
  onChange,
  submitData,
  handlePrev,
  cvv,
  cardOwner,
  expiryDate,
  bankName,
}) => (
  <FormContainer>
    <TextField onChange={onChange('cardOwner')} hintText="Card Owner" fullWidth={true} />
    <TextField onChange={onChange('cvv')} hintText="CVV" fullWidth={true} />
    <TextField onChange={onChange('expiryDate')} hintText="Expiry Date on Card" fullWidth={true} />
    <TextField onChange={onChange('bankName')} hintText="Bank Name" fullWidth={true} />
    <PaymentInfoWrapper>Amount Payable: &#x20b9; 1500</PaymentInfoWrapper>
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
        onClick={submitData}
      />
    </ButtonContainer>
  </FormContainer>
);

export default PaymentForm;
