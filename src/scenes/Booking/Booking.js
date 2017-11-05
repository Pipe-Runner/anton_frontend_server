import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, ContentWrapper, MainWrapper } from './styles';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import BookingForm from './components/BookingForm';
import CarDetailsForm from './components/CarDetailsForm';
import PaymentForm from './components/PaymentForm';
import moment from 'moment';
import validator from 'validator';
import unique from 'lodash.uniq';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      emailId: this.props.emailId,
      userId: this.props.userId,
      contactNumber: this.props.contactNumber,
      date: new Date(),
      dateError: undefined,
      time: new Date(),
      timeError: undefined,
      carName: '',
      carNameError: undefined,
      numberPlate: '',
      numberPlateError: '',
      fuelType: 'PETROL',
      cvv: '',
      cvvError: undefined,
      expiryDate: '',
      expiryDateError: undefined,
      cardOwner: '',
      cardOwnerError: undefined,
      bankName: '',
      bankNameError: undefined,
      vehicleNameList: [],
    };
  }

  componentDidMount() {
    this.props.dispatchFetchVehicleList();
  }

  componentWillReceiveProps = nextProps => {
    const vehicleList = nextProps.vehicleList ? nextProps.vehicleList : [];
    const vehicleNameList = unique(vehicleList.reduce((acc, item) => [...acc, item.name], []));
    this.setState(prevState => ({
      ...prevState,
      vehicleNameList,
    }));
  };

  onChange = textField => (event, value) => {
    if (textField === 'date' || textField === 'time') {
      this.setState({ ...this.state, [textField]: value, [`${textField}Error`]: undefined });
      this.props.dispatchResetIsVerified();
    } else {
      this.setState({ ...this.state, [textField]: value, [`${textField}Error`]: undefined });
    }
  };

  handleUpdateAutoComplete = textField => value => {
    this.setState({
      ...this.state,
      [textField]: value,
      [`${textField}Error`]: undefined,
    });
  };

  handleNewRequestAutoComplete = textField => value => {
    this.setState({
      ...this.state,
      [textField]: value,
      [`${textField}Error`]: undefined,
    });
  };

  verfifyData = stage => {
    switch (stage) {
      case 0:
        return () => {
          let dateError = undefined;
          let timeError = undefined;
          let isDirty = false;

          if (this.state.stepIndex === 0) {
            if (this.state.time.getHours() < 10 || this.state.time.getHours() > 18) {
              timeError = 'Booking can only be provided between 10 AM and 6 PM';
              isDirty = true;
            }
          }

          if (!isDirty) {
            this.props.dispatchVefifyBookingData(0, {
              userId: this.state.userId,
              emailId: this.state.emailId,
              contactNumber: this.state.contactNumber,
              date: moment(this.state.date).format('YYYY-MM-DD'),
              time: moment(this.state.time).format('HH:mm:ss'),
            });
          } else {
            this.setState({
              ...this.state,
              dateError,
              timeError,
            });
          }
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
    let cvvError = undefined;
    let expiryDateError = undefined;
    let cardOwnerError = undefined;
    let bankNameError = undefined;
    let isDirty = false;

    if (this.state.cvv === '') {
      cvvError = 'CVV cannot be empty';
      isDirty = true;
    }
    if (
      this.state.cvv !== '' &&
      (this.state.cvv.length !== 3 || !validator.isInt(this.state.cvv))
    ) {
      cvvError = 'Invalid CVV';
      isDirty = true;
    }
    if (this.state.cardOwner === '') {
      cardOwnerError = 'Card Owner cannot be empty';
      isDirty = true;
    }
    if (this.state.bankName === '') {
      bankNameError = 'Bank Name cannot be empty';
      isDirty = true;
    }
    if (this.state.expiryDate === '') {
      expiryDateError = 'Expiry Date cannot be empty';
      isDirty = true;
    }
    if (
      this.state.expiryDate !== '' &&
      (this.state.expiryDate.length !== 5 || !moment(this.state.expiryDate, 'MM/YY').isValid())
    ) {
      expiryDateError = 'Invalid Date';
      isDirty = true;
    }

    if (!isDirty) {
      const data = {
        emailId: this.state.emailId,
        userId: this.state.userId,
        contactNumber: this.state.contactNumber,
        carName: this.state.carName,
        fuelType: this.state.fuelType,
        numberPlate: this.state.numberPlate,
        date: moment(this.state.date).format('YYYY-MM-DD'),
        time: moment(this.state.time).format('HH:mm:ss'),
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
    } else {
      this.setState({
        cvvError,
        expiryDateError,
        cardOwnerError,
        bankNameError,
      });
    }
  };

  handleNext = () => {
    let carNameError = undefined;
    let numberPlateError = undefined;
    let isDirty = false;

    if (this.state.stepIndex === 1) {
      const vehicleList = this.props.vehicleList.filter(
        item => item.name === this.state.carName && item.fuelType === this.state.fuelType
      );

      if (this.state.carName === '') {
        carNameError = 'Car Name cannot be empty';
        isDirty = true;
      }

      if (
        this.state.vehicleName !== '' &&
        this.state.vehicleNameList.indexOf(this.state.carName) === -1
      ) {
        carNameError = 'Car Name not in list';
        isDirty = true;
      }

      if (
        this.state.vehicleNameList.indexOf(this.state.carName) !== -1 &&
        vehicleList.length !== 1
      ) {
        carNameError = 'Selected Fuel Type not available for this car';
        isDirty = true;
      }

      if (this.state.numberPlate === '') {
        numberPlateError = 'Number Plate cannot be empty';
        isDirty = true;
      }
    }

    if (!isDirty) {
      this.props.dispatchResetIsVerified();
      const { stepIndex } = this.state;

      this.setState(prevState => ({
        ...prevState,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    } else {
      this.setState({
        carNameError,
        numberPlateError,
      });
    }
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
            dateError={this.state.dateError}
            time={this.state.time}
            timeError={this.state.timeError}
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
            carNameError={this.state.carNameError}
            numberPlate={this.state.numberPlate}
            numberPlateError={this.state.numberPlateError}
            fuelType={this.state.numberPlate}
            serviceType={this.state.serviceType}
            handleNewRequestAutoComplete={this.handleNewRequestAutoComplete}
            handleUpdateAutoComplete={this.handleUpdateAutoComplete}
            vehicleNameList={this.state.vehicleNameList}
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
            cvvError={this.state.cvvError}
            expiryDate={this.state.expiryDate}
            expiryDateError={this.state.expiryDateError}
            cardOwner={this.state.cardOwner}
            cardOwnerError={this.state.cardOwnerError}
            bankName={this.state.bankName}
            bankNameError={this.state.bankNameError}
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
                <StepLabel>Complete payment</StepLabel>
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
