import React from 'react';
import { Container } from './styles';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ResetIcon from 'react-icons/lib/fa/ban';
import ApplyIcon from 'react-icons/lib/fa/play';
import { theme } from '../../../utils/theme';
import { ButtonContainer } from './styles';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const ChangeStatusBar = ({
  userId,
  employeeId,
  userLevel,
  isWorking,
  onMakeEmployee,
  onReset,
  onChangeUserStatus,
  onChangeTextField,
  isChanged,
}) => {
  return (
    <Container>
      <TextField
        disabled={true}
        fullWidth
        style={{ margin: '8px 0px 0px 0px' }}
        floatingLabelText="User ID"
        value={userId}
      />
      <TextField
        disabled={true}
        fullWidth
        style={{ margin: '8px 0px 0px 0px' }}
        floatingLabelText="Employee ID"
        value={employeeId}
      />
      <RadioButtonGroup
        onChange={onChangeTextField('userLevel')}
        valueSelected={userLevel}
        name="userLevel"
        style={{ margin: '8px 0px 0px 0px' }}
      >
        <RadioButton
          disabled={employeeId !== ''}
          style={{ margin: '8px 0px 8px 0px' }}
          value={0}
          label="Normal"
        />
        <RadioButton style={{ margin: '8px 0px 8px 0px' }} value={1} label="Admin" />
        <RadioButton style={{ margin: '8px 0px 8px 0px' }} value={2} label="Super User" />
      </RadioButtonGroup>
      {employeeId !== '' ? (
        <RadioButtonGroup
          style={{ margin: '8px 0px 0px 0px' }}
          name="isWorking"
          valueSelected={isWorking}
          onChange={onChangeTextField('isWorking')}
        >
          <RadioButton style={{ margin: '8px 0px 8px 0px' }} value={1} label="Working" />
          <RadioButton style={{ margin: '8px 0px 8px 0px' }} value={0} label="Not Working" />
        </RadioButtonGroup>
      ) : (
        undefined
      )}
      {employeeId === '' ? (
        <ButtonContainer>
          <RaisedButton
            style={{ flex: 1, margin: ' 0px 0px 0px 4px' }}
            backgroundColor="#304FFE"
            onClick={onMakeEmployee}
            label="Make Employee"
            labelColor="#ffffff"
          />
        </ButtonContainer>
      ) : (
        undefined
      )}
      <ButtonContainer>
        <FlatButton
          style={{ flex: 1, margin: ' 0px 0px 0px 4px' }}
          backgroundColor={isChanged ? '#F50057' : '#9E9E9E'}
          hoverColor="#FF4081"
          icon={<ResetIcon size={24} color={theme.canvasColor} />}
          onClick={onReset}
          disabled={!isChanged}
        />
        <FlatButton
          style={{ flex: 1, margin: ' 0px 0px 0px 4px' }}
          backgroundColor={isChanged ? '#00C853' : '#9E9E9E'}
          hoverColor="#00E676"
          icon={<ApplyIcon size={24} color={theme.canvasColor} />}
          onClick={onChangeUserStatus}
          disabled={!isChanged}
        />
      </ButtonContainer>
    </Container>
  );
};

export default ChangeStatusBar;
