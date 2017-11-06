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
  cvvError,
  cardOwner,
  cardOwnerError,
  expiryDate,
  expiryDateError,
  bankName,
  bankNameError,
}) => (
  <FormContainer>
    <TextField
      onChange={onChange('cardOwner')}
      hintText="Card Owner"
      fullWidth={true}
      errorText={cardOwnerError}
    />
    <TextField onChange={onChange('cvv')} hintText="CVV" fullWidth={true} errorText={cvvError} />
    <TextField
      onChange={onChange('expiryDate')}
      hintText="Expiry Date on Card (MM/YY)"
      fullWidth={true}
      errorText={expiryDateError}
    />
    <TextField
      onChange={onChange('bankName')}
      hintText="Bank Name"
      fullWidth={true}
      errorText={bankNameError}
    />
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
        onClick={event => {
          event.preventDefault();
          submitData();
        }}
      />

      {/* Remove during deployment */}
      <span
        className="pm-button"
        id="CFA0CDB05D426E5966442EED09C73F4C"
        onClick={() => {
          window.PUM.setData('1500', '123', 'Nothing');
          window.PUM.pay();
        }}
      >
        <span style={{ margin: '16px 0px 0px 16px' }} className="state active">
          <input
            type="image"
            src="https://file.payumoney.com/images/payby_payumoney/new_buttons/21.png"
            width="88"
            height="36"
          />
        </span>
        <span className="state clicked" style={{ display: 'none' }}>
          <input
            type="image"
            src="https://file.payumoney.com/images/payby_payumoney/new_buttons/submitted/21.png"
            width="88"
            height="36"
          />
        </span>
      </span>
      {/*  */}
    </ButtonContainer>
  </FormContainer>
);

export default PaymentForm;
