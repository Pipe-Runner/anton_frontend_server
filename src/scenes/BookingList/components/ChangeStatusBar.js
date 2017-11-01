import React from 'react';
import { Container } from './styles';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ClearBookingIcon from 'react-icons/lib/md/check-circle';
import { theme } from '../../../utils/theme';
import { ButtonContainer } from './styles';

const ChangeStatusBar = ({
  customerFullName,
  customerContactNumber,
  customerEmailId,
  numberPlate,
  employeeId,
  isDone,
  selected,
  onBookingCleared,
}) => (
  <Container>
    <TextField
      disabled={true}
      fullWidth
      style={{ margin: '8px 0px 0px 0px' }}
      floatingLabelText="Customer Name"
      value={customerFullName}
    />
    <TextField
      disabled={true}
      fullWidth
      style={{ margin: '8px 0px 0px 0px' }}
      floatingLabelText="Contact Number"
      value={customerContactNumber}
    />
    <TextField
      disabled={true}
      fullWidth
      style={{ margin: '8px 0px 0px 0px' }}
      floatingLabelText="Customer EmailId"
      value={customerEmailId}
    />
    <TextField
      disabled={true}
      fullWidth
      style={{ margin: '8px 0px 0px 0px' }}
      floatingLabelText="Number Plate"
      value={numberPlate}
    />
    <TextField
      disabled={true}
      fullWidth
      style={{ margin: '8px 0px 16px 0px' }}
      value={employeeId === undefined ? 'Employee not registered' : employeeId}
      floatingLabelText="Employee ID"
    />
    <ButtonContainer>
      <FlatButton
        style={{ flex: 1, margin: ' 0px 0px 0px 4px' }}
        backgroundColor={
          selected.length === 0 || employeeId === undefined || isDone === 1 ? '#9E9E9E' : '#00C853'
        }
        hoverColor="#00E676"
        icon={<ClearBookingIcon size={24} color={theme.canvasColor} />}
        disabled={selected.length === 0 || employeeId === undefined || isDone === 1 ? true : false}
        onClick={onBookingCleared}
      />
    </ButtonContainer>
  </Container>
);

export default ChangeStatusBar;
