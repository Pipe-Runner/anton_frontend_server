import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AcceptIcon from 'react-icons/lib/fa/play';
import RejectIcon from 'react-icons/lib/ti/cancel';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { FormContainer, Spacer, ButtonContainer } from './styles';

const BookingForm = ({ carName, numberPlate, fuelType, onChange, handlePrev, handleNext }) => (
  <FormContainer>
    <TextField
      value={carName}
      onChange={onChange('carName')}
      hintText="Car Name"
      fullWidth={true}
    />
    <TextField
      value={numberPlate}
      onChange={onChange('numberPlate')}
      hintText="Number Plate"
      fullWidth={true}
    />
    <RadioButtonGroup name="fuelType" defaultSelected="PETROL" onChange={onChange('fuelType')}>
      <RadioButton value="PETROL" label="Petrol" />
      <RadioButton value="DESIEL" label="Desiel" style={{ margin: '16px 0px 0px 0px' }} />
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
