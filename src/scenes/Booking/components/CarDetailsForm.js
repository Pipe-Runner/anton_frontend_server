import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AcceptIcon from 'react-icons/lib/fa/play';
import RejectIcon from 'react-icons/lib/ti/cancel';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { FormContainer, Spacer, ButtonContainer } from './styles';
import AutoComplete from 'material-ui/AutoComplete';

const BookingForm = ({
  carName,
  carNameError,
  numberPlate,
  numberPlateError,
  fuelType,
  onChange,
  handlePrev,
  handleNext,
  handleNewRequestAutoComplete,
  handleUpdateAutoComplete,
  vehicleNameList,
}) => (
  <FormContainer>
    <AutoComplete
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      fullWidth
      searchText={carName}
      floatingLabelText="Car Name"
      onUpdateInput={handleUpdateAutoComplete('carName')}
      onNewRequest={handleNewRequestAutoComplete('carName')}
      filter={AutoComplete.fuzzyFilter}
      dataSource={vehicleNameList}
      openOnFocus={true}
      errorText={carNameError}
    />
    <TextField
      value={numberPlate}
      onChange={onChange('numberPlate')}
      hintText="Number Plate"
      fullWidth={true}
      errorText={numberPlateError}
    />
    <RadioButtonGroup name="fuelType" defaultSelected="PETROL" onChange={onChange('fuelType')}>
      <RadioButton value="PETROL" label="Petrol" />
      <RadioButton value="DIESEL" label="Diesel" style={{ margin: '16px 0px 0px 0px' }} />
    </RadioButtonGroup>
    <Spacer />
    <ButtonContainer>
      <FlatButton
        backgroundColor="#F50057"
        hoverColor="#FF4081"
        icon={<RejectIcon color={'#ffffff'} />}
        onClick={handlePrev}
      />
      <FlatButton
        style={{ margin: '0px 0px 0px 16px' }}
        backgroundColor="#a4c639"
        hoverColor="#8AA62F"
        icon={<AcceptIcon color={'#ffffff'} />}
        onClick={handleNext}
      />
    </ButtonContainer>
  </FormContainer>
);

export default BookingForm;
