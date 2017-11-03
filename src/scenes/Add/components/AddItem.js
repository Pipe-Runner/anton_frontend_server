import React from 'react';
import { Container } from './styles';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import ResetIcon from 'react-icons/lib/fa/ban';
import AddItemIcon from 'react-icons/lib/md/move-to-inbox';
import { theme } from '../../../utils/theme';
import { ButtonContainer, Spacer } from './styles';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const AddItem = ({
  partType,
  partTypeError,
  modelNumber,
  modelNumberError,
  cost,
  costError,
  supplierName,
  supplierNameError,
  supplierContactNumber,
  supplierContactNumberError,
  vehicleName,
  vehicleNameError,
  fuelType,
  storedAt,
  onChangeTextField,
  onAddItem,
  handleNewRequestAutoComplete,
  handleUpdateAutoComplete,
  supplierNameList,
  vehicleNameList,
  reset,
}) => (
  <Container style={{ flex: 1 }}>
    <TextField
      fullWidth
      style={{ margin: '4px 0px 0px 0px' }}
      floatingLabelText="Parts type"
      value={partType}
      onChange={onChangeTextField('partType')}
      errorText={partTypeError}
    />
    <TextField
      fullWidth
      style={{ margin: '4px 0px 0px 0px' }}
      floatingLabelText="Model Number"
      value={modelNumber}
      onChange={onChangeTextField('modelNumber')}
      errorText={modelNumberError}
    />
    <TextField
      fullWidth
      style={{ margin: '4px 0px 0px 0px' }}
      value={cost}
      floatingLabelText="Cost"
      onChange={onChangeTextField('cost')}
      errorText={costError}
    />
    <AutoComplete
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      fullWidth
      style={{ margin: '4px 0px 0px 0px' }}
      searchText={supplierName}
      floatingLabelText="Supplier Name"
      onUpdateInput={handleUpdateAutoComplete('supplierName')}
      onNewRequest={handleNewRequestAutoComplete('supplierName')}
      filter={AutoComplete.fuzzyFilter}
      dataSource={supplierNameList}
      openOnFocus={true}
      errorText={supplierNameError}
    />
    <TextField
      fullWidth
      style={{ margin: '4px 0px 0px 0px' }}
      value={supplierContactNumber}
      floatingLabelText="Supplier Contact Number"
      onChange={onChangeTextField('supplierContactNumber')}
      errorText={supplierContactNumberError}
    />
    <RadioButtonGroup
      onChange={onChangeTextField('storedAt')}
      valueSelected={storedAt}
      name="storedAt"
      style={{ margin: '8px 0px 0px 0px' }}
    >
      <RadioButton style={{ margin: '8px 0px 8px 0px' }} value={'SHOP'} label="Shop" />
      <RadioButton style={{ margin: '16px 0px 0px 0px' }} value={'GODOWN'} label="Godown" />
    </RadioButtonGroup>
    <AutoComplete
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      fullWidth
      style={{ margin: '4px 0px 0px 0px' }}
      searchText={vehicleName}
      floatingLabelText="Vehicle Name"
      onUpdateInput={handleUpdateAutoComplete('vehicleName')}
      onNewRequest={handleNewRequestAutoComplete('vehicleName')}
      filter={AutoComplete.fuzzyFilter}
      dataSource={vehicleNameList}
      openOnFocus={true}
      errorText={vehicleNameError}
    />
    <RadioButtonGroup
      onChange={onChangeTextField('fuelType')}
      valueSelected={fuelType}
      name="fuelType"
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
        icon={<AddItemIcon size={24} color={theme.canvasColor} />}
        onClick={onAddItem}
      />
    </ButtonContainer>
  </Container>
);

export default AddItem;
