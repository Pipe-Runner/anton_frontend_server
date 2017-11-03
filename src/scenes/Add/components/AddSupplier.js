import React from 'react';
import { Container, ButtonContainer } from './styles';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ResetIcon from 'react-icons/lib/fa/ban';
import AddISupplierIcon from 'react-icons/lib/md/person-add';
import { theme } from '../../../utils/theme';

const AddSupplier = ({
  onAddSupplier,
  onChangeTextField,
  supplierNameToAdd,
  supplierNameToAddError,
  supplierContactNumberToAdd,
  supplierContactNumberToAddError,
  supplierAddressToAdd,
  supplierAddressToAddError,
  reset,
}) => (
  <Container>
    <TextField
      fullWidth
      value={supplierNameToAdd}
      onChange={onChangeTextField('supplierNameToAdd')}
      style={{ margin: '8px 0px 0px 0px' }}
      floatingLabelText="Supplier Name"
      errorText={supplierNameToAddError}
    />
    <TextField
      fullWidth
      value={supplierContactNumberToAdd}
      onChange={onChangeTextField('supplierContactNumberToAdd')}
      style={{ margin: '8px 0px 0px 0px' }}
      floatingLabelText="Supplier Contact Number"
      errorText={supplierContactNumberToAddError}
    />
    <TextField
      fullWidth
      value={supplierAddressToAdd}
      onChange={onChangeTextField('supplierAddressToAdd')}
      style={{ margin: '8px 0px 16px 0px' }}
      floatingLabelText="Supplier Address"
      errorText={supplierAddressToAddError}
    />
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
        icon={<AddISupplierIcon size={24} color={theme.canvasColor} />}
        onClick={onAddSupplier}
      />
    </ButtonContainer>
  </Container>
);

export default AddSupplier;
