import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AcceptButton from 'react-icons/lib/fa/play';
import RejectButton from 'react-icons/lib/ti/cancel';
import { FormContainer, Spacer, ButtonContainer } from './styles';

const BookingForm = ({ onChange, handlePrev, handleNext }) => (
  <FormContainer>
    <TextField onChange={onChange('name')} hintText="Name" fullWidth={true} />
    <TextField onChange={onChange('customerId')} hintText="Customer ID" fullWidth={true} />
    <TextField onChange={onChange('carName')} hintText="Car Name" fullWidth={true} />
    <TextField onChange={onChange('fuelType')} hintText="Fuel Type" fullWidth={true} />
    <TextField
      onChange={onChange('serviceType')}
      hintText="Service Type (Repairs / Repaint / Servicing)"
      fullWidth={true}
    />
    <TextField onChange={onChange('phoneNumber')} hintText="Phone Number" fullWidth={true} />
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

export default BookingForm;
