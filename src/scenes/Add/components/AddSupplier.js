import React from 'react';
import { Container } from './styles';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'react-icons/lib/md/search';
import { theme } from '../../../utils/theme';

const AddSupplier = ({
  onSearch,
  onAdd,
  onChange,
  selected_vehicleType,
  selected_partType,
  selected_manufacturer,
}) => (
  <Container>
    <TextField fullWidth style={{ margin: '8px 0px 0px 0px' }} hintText="Location" />
    <TextField fullWidth style={{ margin: '8px 0px 0px 0px' }} hintText="Part Type" />
    <TextField fullWidth style={{ margin: '8px 0px 16px 0px' }} hintText="Supplier ID" />
    <FlatButton
      backgroundColor="#0277BD"
      hoverColor="#01579B"
      fullWidth
      icon={<SearchIcon size={24} color={theme.canvasColor} />}
    />
  </Container>
);

export default AddSupplier;
