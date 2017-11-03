import React from 'react';
import { Container, ButtonContainer } from './styles';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ResetIcon from 'react-icons/lib/fa/ban';
import AddIVehicleIcon from 'react-icons/lib/md/time-to-leave';
import { theme } from '../../../utils/theme';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const AddVehicle = ({
  onAddVehicle,
  vehicleNameToAddError,
  onChangeTextField,
  vehicleNameToAdd,
  vehicleFuelTypeToAdd,
  reset,
}) => (
  <Container>
    <TextField
      fullWidth
      value={vehicleNameToAdd}
      onChange={onChangeTextField('vehicleNameToAdd')}
      style={{ margin: '8px 0px 0px 0px' }}
      floatingLabelText="Vehicle Name"
      errorText={vehicleNameToAddError}
    />
    <RadioButtonGroup
      onChange={onChangeTextField('vehicleFuelTypeToAdd')}
      valueSelected={vehicleFuelTypeToAdd}
      name="vehicleFuelTypeToAdd"
      style={{ margin: '8px 0px 0px 0px' }}
    >
      <RadioButton style={{ margin: '8px 0px 8px 0px' }} value={'PETROL'} label="Petrol" />
      <RadioButton style={{ margin: '16px 0px 8px 0px' }} value={'DIESEL'} label="Diesel" />
    </RadioButtonGroup>
    <ButtonContainer>
      <FlatButton
        hoverColor="#FF4081"
        backgroundColor="#F50057"
        icon={<ResetIcon size={24} color={theme.canvasColor} />}
        onClick={reset}
      />
      <FlatButton
        style={{ margin: '0px 0px 0px 16px' }}
        hoverColor="#00E676"
        backgroundColor="#00C853"
        icon={<AddIVehicleIcon size={24} color={theme.canvasColor} />}
        onClick={onAddVehicle}
      />
    </ButtonContainer>
  </Container>
);

export default AddVehicle;
