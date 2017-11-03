import React, { Component } from 'react';
import AddSupplier from './components/AddSupplier';
import AddItem from './components/AddItem';
import AddVehicle from './components/AddVehicle';
import { Container, LeftWrapper } from './styles';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partType: '',
      modelNumber: '',
      cost: '',
      vehicleName: '',
      fuelType: '',
      supplierContactNumber: '',
      supplierName: '',
      storedAt: '',
      supplierNameToAdd: '',
      supplierContactNumberToAdd: '',
      supplierAddressToAdd: '',
      vehicleNameToAdd: '',
      vehicleFuelTypeToAdd: '',
    };
  }

  componentDidMount() {
    this.props.dispatchFetchSupplierList();
    this.props.dispatchFetchVehicleList();
  }

  onChangeTextField = textField => (event, value) => {
    this.setState({
      ...this.state,
      [textField]: value,
    });
  };

  handleUpdateAutoComplete = textField => value => {
    this.setState({
      ...this.state,
      [textField]: value,
    });
  };

  handleNewRequestAutoComplete = textField => value => {
    this.setState({
      ...this.state,
      [textField]: value,
    });
  };

  onAddItem = () => {
    let vehicleId;
    let supplierId;

    const vehicleList = this.props.vehicleList.filter(
      item => item.name === this.state.vehicleName && item.fuelType === this.state.fuelType
    );

    if (vehicleList.length !== 1) {
      console.log('no such car');
    } else {
      vehicleId = vehicleList[0].id;
    }

    const supplierList = this.props.supplierList.filter(
      item =>
        item.fullName === this.state.supplierName &&
        item.contactNumber === this.state.supplierContactNumber
    );

    if (supplierList.length !== 1) {
      console.log('no such supplier');
    } else {
      supplierId = supplierList[0].id;
    }

    const data = {
      partType: this.state.partType,
      modelNumber: this.state.modelNumber,
      cost: this.state.cost,
      vehicleId: vehicleId,
      supplierId: supplierId,
      storedAt: this.state.storedAt,
    };

    this.props.dispatchAddItem(data);
  };

  onAddSupplier = () => {
    const data = {
      address: this.state.supplierAddressToAdd,
      contactNumber: this.state.supplierContactNumberToAdd,
      fullName: this.state.supplierNameToAdd,
    };

    this.props.dispatchAddSupplier(data);
  };

  onAddVehicle = () => {
    const data = {
      name: this.state.vehicleNameToAdd,
      fuelType: this.state.vehicleFuelTypeToAdd,
    };

    this.props.dispatchAddVehicle(data);
  };

  render() {
    const supplierList = this.props.supplierList ? this.props.supplierList : [];
    const vehicleList = this.props.vehicleList ? this.props.vehicleList : [];
    const supplierNameList = supplierList.reduce((acc, item) => [...acc, item.fullName], []);
    const vehicleNameList = vehicleList.reduce((acc, item) => [...acc, item.name], []);

    // console.log(supplierNameList);
    // console.log(vehicleNameList);
    // console.log(this.state);

    const {
      partType,
      modelNumber,
      cost,
      vehicleName,
      fuelType,
      supplierName,
      supplierContactNumber,
      storedAt,
    } = this.state;

    return (
      <Container>
        <AddItem
          partType={partType}
          modelNumber={modelNumber}
          cost={cost}
          vehicleName={vehicleName}
          supplierContactNumber={supplierContactNumber}
          fuelType={fuelType}
          storedAt={storedAt}
          supplierName={supplierName}
          onChangeTextField={this.onChangeTextField}
          onAddItem={this.onAddItem}
          supplierNameList={supplierNameList}
          vehicleNameList={vehicleNameList}
          handleNewRequestAutoComplete={this.handleNewRequestAutoComplete}
          handleUpdateAutoComplete={this.handleUpdateAutoComplete}
        />
        <LeftWrapper>
          <AddSupplier
            supplierNameToAdd={this.state.supplierNameToAdd}
            supplierContactNumberToAdd={this.state.supplierContactNumberToAdd}
            supplierAddressToAdd={this.state.supplierAddressToAdd}
            onChangeTextField={this.onChangeTextField}
            onAddSupplier={this.onAddSupplier}
          />
          <AddVehicle
            vehicleNameToAdd={this.state.vehicleNameToAdd}
            vehicleFuelTypeToAdd={this.state.vehicleFuelTypeToAdd}
            onAddVehicle={this.onAddVehicle}
            onChangeTextField={this.onChangeTextField}
          />
        </LeftWrapper>
      </Container>
    );
  }
}

export default Add;
