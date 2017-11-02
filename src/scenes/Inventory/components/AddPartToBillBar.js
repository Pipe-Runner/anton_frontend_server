import React from 'react';
import { Container } from './styles';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import CashoutIcon from 'react-icons/lib/md/next-week';
import { theme } from '../../../utils/theme';
import { ButtonContainer, ChipsContainer, PaymentInfoWrapper } from './styles';

const AddPartToBillBar = ({
  customerContactNumber,
  customerContactNumberError,
  customerEmailId,
  customerEmailIdError,
  employeeId,
  cart,
  onTextFieldChange,
  onCheckOut,
}) => (
  <Container>
    <TextField
      disabled={employeeId === undefined ? true : false}
      fullWidth
      style={{ margin: '8px 0px 0px 0px' }}
      floatingLabelText="Customer EmailID"
      value={customerEmailId}
      onChange={onTextFieldChange('customerEmailId')}
      errorText={customerEmailIdError}
    />
    <TextField
      disabled={employeeId === undefined ? true : false}
      fullWidth
      style={{ margin: '8px 0px 0px 0px' }}
      floatingLabelText="Contact Number"
      value={customerContactNumber}
      onChange={onTextFieldChange('customerContactNumber')}
      errorText={customerContactNumberError}
    />
    <TextField
      fullWidth
      style={{ margin: '8px 0px 16px 0px' }}
      value={employeeId === undefined ? 'Employee not registered' : employeeId}
      floatingLabelText="Employee ID"
      disabled
    />
    <ButtonContainer>
      <PaymentInfoWrapper>
        &#x20b9; {cart.reduce((acc, item) => acc + parseInt(item.cost, 10), 0)}
      </PaymentInfoWrapper>
      <FlatButton
        style={{ flex: 1, margin: ' 0px 0px 0px 4px' }}
        backgroundColor={employeeId === undefined || cart.length < 1 ? '#9E9E9E' : '#00C853'}
        hoverColor="#00E676"
        icon={<CashoutIcon size={24} color={theme.canvasColor} />}
        disabled={employeeId === undefined || cart.length < 1 ? true : false}
        onClick={onCheckOut}
      />
    </ButtonContainer>
    <ChipsContainer>
      {cart.map((item, index) => (
        <Chip
          style={{ margin: 4 }}
          labelColor="#ffffff"
          backgroundColor="#3F51B5"
          key={index}
        >{`${item.partType}, ${item.modelNumber}`}</Chip>
      ))}
    </ChipsContainer>
  </Container>
);

export default AddPartToBillBar;
