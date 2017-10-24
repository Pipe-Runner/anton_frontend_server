import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, ContentWrapper, MainWrapper } from './styles';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import BookingForm from './components/BookingForm';
import PaymentForm from './components/PaymentForm';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      userBookingData: {
        name: '',
        customerId: '',
        carName: '',
        fuelType: '',
        serviceType: '',
        phoneNumber: '',
        cardNumber: '',
        cvv: '',
        expiryDate: '',
        cardOwner: '',
      },
    };
  }

  onChange = textField => (event, value) => {
    const currentState = this.state;
    const userBookingData = this.state.userBookingData;
    userBookingData[textField] = value;
    this.setState(prevState => ({ ...prevState, userBookingData: { ...userBookingData } }));
    console.log(this.state);
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 1,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getContent = stepIndex => {
    switch (stepIndex) {
      case 0: {
        return (
          <BookingForm
            onChange={this.onChange}
            handlePrev={this.handlePrev}
            handleNext={this.handleNext}
          />
        );
      }
      case 1: {
        return (
          <PaymentForm
            onChange={this.onChange}
            handlePrev={this.handlePrev}
            handleNext={this.handleNext}
          />
        );
      }
    }
  };

  render() {
    const { finished, stepIndex } = this.state;

    return (
      <Container>
        {this.state.finished === true ? (
          <Redirect to="/" />
        ) : (
          <MainWrapper>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Make a booking</StepLabel>
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
