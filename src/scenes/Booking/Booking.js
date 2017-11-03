import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, ContentWrapper, MainWrapper } from './styles';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import BookingForm from './components/BookingForm';
import CarDetailsForm from './components/CarDetailsForm';
import PaymentForm from './components/PaymentForm';
import moment from 'moment';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      isVerified: false,
      emailId: this.props.emailId,
      userId: this.props.userId,
      contactNumber: this.props.contactNumber,
      date: null,
      time: null,
      carName: '',
      numberPlate: '',
      fuelType: '',
      cvv: '',
      expiryDate: '',
      cardOwner: '',
      bankName: '',
    };
  }

  componentDidMount = () => {
    // Ask for list of available cars
  };

  onChange = textField => (event, value) => {
    if (textField === 'date' || textField === 'time') {
      this.setState({ ...this.state, [textField]: value, isVerified: false });
    }
    this.setState({ ...this.state, [textField]: value });
  };

  verfifyData = stage => {
    switch (stage) {
      case 0:
        return () => {
          this.props.dispatchVefifyBookingData(0, {
            userId: this.state.userId,
            emailId: this.state.emailId,
            contactNumber: this.state.contactNumber,
            date: moment(this.state.date).format('YYYY-MM-DD'),
            time: moment(this.state.time).format('HH:MM:SS'),
          });
        };
      case 1:
        return () => {
          console.log('Verify block 2');
        };
      default:
        console.log('Nothing to verify');
        break;
    }
  };

  submitData = () => {
    const data = {
      emailId: this.state.emailId,
      userId: this.state.userId,
      contactNumber: this.state.contactNumber,
      carName: this.state.carName,
      fuelType: this.state.fuelType,
      numberPlate: this.state.numberPlate,
      date: moment(this.state.date).format('YYYY-MM-DD'),
      time: moment(this.state.time).format('HH:MM:SS'),
      cvv: this.state.cvv,
      cardOwner: this.state.cardOwner,
      expiryDate: this.state.expiryDate,
      bankName: this.state.bankName
        .toUpperCase()
        .split(' ')
        .join('_'),
    };
    this.props.dispatchSubmitData(data, () => {
      this.setState({ ...this.state, finished: true });
    });
  };

  handleNext = () => {
    this.props.dispatchResetIsVerified();
    const { stepIndex } = this.state;

    this.setState(prevState => ({
      ...prevState,
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    }));
  };

  handlePrev = () => {
    this.props.dispatchResetIsVerified();

    const { stepIndex } = this.state;
    if (stepIndex >= 0) {
      this.setState(prevState => ({
        ...prevState,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  getContent = stepIndex => {
    const isVerified = this.props.isVerified === undefined ? false : this.props.isVerified;

    switch (stepIndex) {
      case 0: {
        return (
          <BookingForm
            onChange={this.onChange}
            handlePrev={this.handlePrev}
            handleNext={this.handleNext}
            userId={this.state.userId}
            emailId={this.state.emailId}
            contactNumber={this.state.contactNumber}
            date={this.state.date}
            time={this.state.time}
            verfifyData={this.verfifyData}
            isVerified={isVerified}
          />
        );
      }
      case 1: {
        return (
          <CarDetailsForm
            onChange={this.onChange}
            handlePrev={this.handlePrev}
            handleNext={this.handleNext}
            carName={this.state.carName}
            numberPlate={this.state.numberPlate}
            fuelType={this.state.numberPlate}
            serviceType={this.state.serviceType}
          />
        );
      }
      case 2: {
        return (
          <PaymentForm
            onChange={this.onChange}
            handlePrev={this.handlePrev}
            submitData={this.submitData}
            cvv={this.state.cvv}
            expiryDate={this.state.expiryDate}
            cardOwner={this.state.cardOwner}
            bankName={this.state.bankName}
          />
        );
      }
      default: {
        return undefined;
      }
    }
  };

  render() {
    const { finished, stepIndex } = this.state;

    return (
      <Container>
        {finished === true || stepIndex === -1 ? (
          <Redirect to="/" />
        ) : (
          <MainWrapper>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Make a booking</StepLabel>
              </Step>
              <Step>
                <StepLabel>Fill in your details</StepLabel>
              </Step>
              <Step>
                <StepLabel>Complete the payment</StepLabel>
              </Step>
            </Stepper>
            <ContentWrapper>{this.getContent(stepIndex)}</ContentWrapper>
          </MainWrapper>
        )}
      </Container>
    );
  }
}

export default Booking;
