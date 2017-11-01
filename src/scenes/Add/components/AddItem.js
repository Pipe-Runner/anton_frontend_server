import React from 'react';
import { Container } from './styles';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AddItemIcon from 'react-icons/lib/md/shopping-basket';
import { theme } from '../../../utils/theme';
import { ButtonContainer, Spacer } from './styles';

const AddItem = ({
  partsType,
  modelNumber,
  cost,
  supplierName,
  storedAt,
  vehicalType,
  fuelType,
  onTextFieldChange = () => {},
  onCheckOut,
}) => (
  <Container>
    <TextField
      fullWidth
      style={{ margin: '8px 0px 16px 0px' }}
      floatingLabelText="Parts type"
      value={partsType}
    />
    <TextField
      fullWidth
      style={{ margin: '8px 0px 16px 0px' }}
      floatingLabelText="Model Number"
      value={modelNumber}
    />
    <TextField
      fullWidth
      style={{ margin: '8px 0px 16px 0px' }}
      value={cost}
      floatingLabelText="Cost"
    />
    <TextField
      fullWidth
      style={{ margin: '8px 0px 16px 0px' }}
      value={supplierName}
      floatingLabelText="Supplier Name"
    />
    <TextField
      fullWidth
      style={{ margin: '8px 0px 16px 0px' }}
      value={storedAt}
      floatingLabelText="Stored At"
    />
    <TextField
      fullWidth
      style={{ margin: '8px 0px 16px 0px' }}
      value={vehicalType}
      floatingLabelText="Vehical Type"
    />
    <TextField
      fullWidth
      style={{ margin: '8px 0px 16px 0px' }}
      value={fuelType}
      floatingLabelText="Fuel Type"
    />
    <ButtonContainer>
      <FlatButton
        hoverColor="#00E676"
        backgroundColor="#00E676"
        icon={<AddItemIcon size={24} color={theme.canvasColor} />}
        onClick={onCheckOut}
      />
    </ButtonContainer>
  </Container>
);

export default AddItem;
