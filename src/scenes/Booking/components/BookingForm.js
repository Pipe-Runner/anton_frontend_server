import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AcceptIcon from 'react-icons/lib/fa/play';
import VerifyIcon from 'react-icons/lib/md/verified-user';
import RejectIcon from 'react-icons/lib/ti/cancel';
import { FormContainer, Spacer, ButtonContainer } from './styles';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

const BookingForm = ({
  userId,
  emailId,
  contactNumber,
  date,
  time,
  onChange,
  handlePrev,
  handleNext,
  isVerified,
  verfifyData,
}) => (
  <FormContainer>
    <TextField fullWidth={true} defaultValue={userId} floatingLabelText="User ID" disabled={true} />
    <TextField
      fullWidth={true}
      defaultValue={emailId}
      floatingLabelText="Email ID"
      disabled={true}
    />
    <TextField
      value={contactNumber}
      floatingLabelText="Contact Number"
      disabled={true}
      hintText="Contact Number"
      fullWidth={true}
    />
    <DatePicker
      floatingLabelText="Booking Date"
      value={date}
      onChange={onChange('date')}
      mode="landscape"
      fullWidth={true}
    />
    <TimePicker
      floatingLabelText="Booking Time"
      value={time}
      pedantic={true}
      onChange={onChange('time')}
      fullWidth={true}
      minutesStep={30}
    />
    <Spacer />
    <ButtonContainer>
      <FlatButton
        backgroundColor="#F50057"
        hoverColor="#FF4081"
        icon={<RejectIcon color={'#ffffff'} />}
        onClick={handlePrev}
      />
      {isVerified ? (
        <FlatButton
          style={{ margin: '0px 0px 0px 16px' }}
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={<AcceptIcon color={'#ffffff'} />}
          onClick={handleNext}
        />
      ) : (
        <FlatButton
          style={{ margin: '0px 0px 0px 16px' }}
          backgroundColor="#9C27B0"
          hoverColor="#AB47BC"
          icon={<VerifyIcon color={'#ffffff'} />}
          onClick={verfifyData(0)}
        />
      )}
    </ButtonContainer>
  </FormContainer>
);

export default BookingForm;
