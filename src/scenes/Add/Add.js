import React, { Component } from 'react';
import AddSupplier from './components/AddSupplier';
import AddItem from './components/AddItem';
import AddVehicle from './components/AddVehicle';
import { Container, LeftWrapper } from './styles';
import validator from 'validator';
import unique from 'lodash.uniq';

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partType: '',
      partTypeError: undefined,
      modelNumber: '',
      modelNumberError: undefined,
      cost: '',
      costError: undefined,
      vehicleName: '',
      vehicleNameError: undefined,
      fuelType: 'PETROL',
      supplierContactNumber: '',
      supplierContactNumberError: undefined,
      supplierName: '',
      supplierNameError: undefined,
      storedAt: 'GODOWN',
      supplierNameToAdd: '',
      supplierNameToAddError: undefined,
      supplierContactNumberToAdd: '',
      supplierContactNumberToAddError: undefined,
      supplierAddressToAdd: '',
      supplierAddressToAddError: undefined,
      vehicleNameToAdd: '',
      vehicleNameToAddError: undefined,
      vehicleFuelTypeToAdd: 'PETROL',
      vehicleNameList: [],
      supplierNameList: [],
    };
  }

  componentDidMount() {
    this.props.dispatchFetchSupplierList();
    this.props.dispatchFetchVehicleList();
  }

  componentWillReceiveProps = nextProps => {
    const supplierList = nextProps.supplierList ? nextProps.supplierList : [];
    const vehicleList = nextProps.vehicleList ? nextProps.vehicleList : [];
    const supplierNameList = supplierList.reduce((acc, item) => [...acc, item.fullName], []);
    const vehicleNameList = unique(vehicleList.reduce((acc, item) => [...acc, item.name], []));
    this.setState({
      ...this.state,
      supplierNameList,
      vehicleNameList,
    });
  };

  onChangeTextField = textField => (event, value) => {
    if (textField === 'fuelType') {
      this.setState({
        ...this.state,
        fuelType: value,
        vehicleNameError: undefined,
      });
    } else
      this.setState({
        ...this.state,
        [textField]: value,
        [`${textField}Error`]: undefined,
      });
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

  onAddItem = () => {
    const vehicleList = this.props.vehicleList.filter(
      item => item.name === this.state.vehicleName && item.fuelType === this.state.fuelType
    );

    const supplierList = this.props.supplierList.filter(
      item =>
        item.fullName === this.state.supplierName &&
        item.contactNumber === this.state.supplierContactNumber
    );

    let vehicleId;
    let supplierId;
    let partTypeError = undefined;
    let modelNumberError = undefined;
    let costError = undefined;
    let vehicleNameError = undefined;
    let supplierContactNumberError = undefined;
    let supplierNameError = undefined;
    let isDirty = false;

    if (this.state.partType === '') {
      partTypeError = 'Part Type cannot be empty';
      isDirty = true;
    }

    if (this.state.modelNumber === '') {
      modelNumberError = 'Model Number cannot be empty';
      isDirty = true;
    }

    if (this.state.cost === '') {
      costError = 'Cost cannot be empty';
      isDirty = true;
    }

    if (this.state.cost !== '' && !validator.isInt(this.state.cost)) {
      costError = 'Cost Invalid';
      isDirty = true;
    }

    if (this.state.vehicleName === '') {
      vehicleNameError = 'Vehicle Name cannot be empty';
      isDirty = true;
    }

    if (
      this.state.vehicleName !== '' &&
      this.state.vehicleNameList.indexOf(this.state.vehicleName) === -1
    ) {
      vehicleNameError = 'Vehicle Name not in list';
      isDirty = true;
    }

    if (
      this.state.vehicleNameList.indexOf(this.state.vehicleName) !== -1 &&
      vehicleList.length !== 1
    ) {
      vehicleNameError = 'Selected Fuel Type not available for this car';
      isDirty = true;
    }

    if (this.state.supplierName === '') {
      supplierNameError = 'Name cannot be empty';
      isDirty = true;
    }

    if (
      this.state.supplierName !== '' &&
      this.state.supplierNameList.indexOf(this.state.supplierName) === -1
    ) {
      supplierNameError = 'Supplier Name not in list';
      isDirty = true;
    }

    if (this.state.supplierContactNumber === '') {
      supplierContactNumberError = 'Contact Number cannot be empty';
      isDirty = true;
    }

    if (
      this.state.supplierContactNumber !== '' &&
      (this.state.supplierContactNumber.length !== 10 ||
        !validator.isInt(this.state.supplierContactNumber))
    ) {
      supplierContactNumberError = 'Invalid Contact Number';
      isDirty = true;
    } else if (
      this.state.supplierNameList.indexOf(this.state.supplierName) !== -1 &&
      supplierList.length !== 1
    ) {
      supplierContactNumberError = 'Contact Number mismatch';
      isDirty = true;
    }

    if (isDirty) {
      this.setState({
        ...this.state,
        partTypeError,
        modelNumberError,
        costError,
        vehicleNameError,
        supplierContactNumberError,
        supplierNameError,
      });
    } else {
      vehicleId = vehicleList[0].id;
      supplierId = supplierList[0].id;
      const data = {
        partType: this.state.partType,
        modelNumber: this.state.modelNumber,
        cost: this.state.cost,
        vehicleId: vehicleId,
        supplierId: supplierId,
        storedAt: this.state.storedAt,
      };

      this.props.dispatchAddItem(data, this.reset('ITEM/PARTIAL'));
    }
  };

  onAddSupplier = () => {
    let supplierAddressToAddError = undefined;
    let supplierContactNumberToAddError = undefined;
    let supplierNameToAddError = undefined;
    let isDirty = false;

    if (this.state.supplierAddressToAdd === '') {
      supplierAddressToAddError = 'Address connot be empty';
      isDirty = true;
    }
    if (this.state.supplierContactNumberToAdd === '') {
      supplierContactNumberToAddError = 'Contact Number cannot be empty';
      isDirty = true;
    }
    if (
      this.state.supplierContactNumberToAdd !== '' &&
      (this.state.supplierContactNumberToAdd.length !== 10 ||
        !validator.isInt(this.state.supplierContactNumberToAdd))
    ) {
      supplierContactNumberToAddError = 'Not a valid phone number';
      isDirty = true;
    }
    if (this.state.supplierNameToAdd === '') {
      supplierNameToAddError = 'Name cannot be empty';
      isDirty = true;
    }

    if (!isDirty) {
      const data = {
        address: this.state.supplierAddressToAdd,
        contactNumber: this.state.supplierContactNumberToAdd,
        fullName: this.state.supplierNameToAdd,
      };
      this.props.dispatchAddSupplier(data, this.reset('SUPPLIER'));
    } else {
      this.setState({
        ...this.state,
        supplierAddressToAddError,
        supplierContactNumberToAddError,
        supplierNameToAddError,
      });
    }
  };

  onAddVehicle = () => {
    let vehicleNameToAddError = undefined;
    let isDirty = false;

    if (this.state.vehicleNameToAdd === '') {
      vehicleNameToAddError = 'Vehicle Name cannot be empty';
      isDirty = true;
    }

    if (isDirty) {
      this.setState({ ...this.state, vehicleNameToAddError });
    } else {
      const data = {
        name: this.state.vehicleNameToAdd,
        fuelType: this.state.vehicleFuelTypeToAdd,
      };

      this.props.dispatchAddVehicle(data, this.reset('VEHICLE'));
    }
  };

  reset = type => () => {
    switch (type) {
      case 'VEHICLE':
        this.setState({
          vehicleFuelTypeToAdd: 'PETROL',
          vehicleNameToAdd: '',
        });
        break;

      case 'SUPPLIER':
        this.setState({
          supplierContactNumberToAdd: '',
          supplierNameToAdd: '',
          supplierAddressToAdd: '',
        });
        break;

      case 'ITEM/PARTIAL':
        this.setState({
          partType: '',
          modelNumber: '',
          cost: '',
        });
        break;

      case 'ITEM/COMPLETE':
        this.setState({
          partType: '',
          modelNumber: '',
          cost: '',
          vehicleName: '',
          fuelType: 'PETROL',
          supplierContactNumber: '',
          supplierName: '',
          storedAt: 'SHOP',
        });
        break;

      default:
        break;
    }
  };

  render() {
    const {
      partType,
      partTypeError,
      modelNumber,
      modelNumberError,
      cost,
      costError,
      vehicleName,
      vehicleNameError,
      fuelType,
      supplierName,
      supplierNameError,
      supplierContactNumber,
      supplierContactNumberError,
      storedAt,
      supplierNameToAdd,
      supplierNameToAddError,
      supplierContactNumberToAdd,
      supplierContactNumberToAddError,
      supplierAddressToAdd,
      supplierAddressToAddError,
      vehicleNameToAdd,
      vehicleNameToAddError,
      vehicleFuelTypeToAdd,
    } = this.state;

    return (
      <Container>
        <AddItem
          partType={partType}
          partTypeError={partTypeError}
          modelNumber={modelNumber}
          modelNumberError={modelNumberError}
          cost={cost}
          costError={costError}
          vehicleName={vehicleName}
          vehicleNameError={vehicleNameError}
          supplierContactNumber={supplierContactNumber}
          supplierContactNumberError={supplierContactNumberError}
          fuelType={fuelType}
          storedAt={storedAt}
          supplierName={supplierName}
          supplierNameError={supplierNameError}
          onChangeTextField={this.onChangeTextField}
          onAddItem={this.onAddItem}
          supplierNameList={this.state.supplierNameList}
          vehicleNameList={this.state.vehicleNameList}
          handleNewRequestAutoComplete={this.handleNewRequestAutoComplete}
          handleUpdateAutoComplete={this.handleUpdateAutoComplete}
          reset={this.reset('ITEM/COMPLETE')}
        />
        <LeftWrapper>
          <AddSupplier
            supplierNameToAdd={supplierNameToAdd}
            supplierNameToAddError={supplierNameToAddError}
            supplierContactNumberToAdd={supplierContactNumberToAdd}
            supplierContactNumberToAddError={supplierContactNumberToAddError}
            supplierAddressToAdd={supplierAddressToAdd}
            supplierAddressToAddError={supplierAddressToAddError}
            onChangeTextField={this.onChangeTextField}
            onAddSupplier={this.onAddSupplier}
            reset={this.reset('SUPPLIER')}
          />
          <AddVehicle
            vehicleNameToAdd={vehicleNameToAdd}
            vehicleNameToAddError={vehicleNameToAddError}
            vehicleFuelTypeToAdd={vehicleFuelTypeToAdd}
            onAddVehicle={this.onAddVehicle}
            onChangeTextField={this.onChangeTextField}
            reset={this.reset('VEHICLE')}
          />
        </LeftWrapper>
      </Container>
    );
  }
}

export default Add;
