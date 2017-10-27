import React from 'react';
import { Container } from './styles';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import AddIcon from 'react-icons/lib/md/add';
import { theme } from '../../../utils/theme';

const AddPartToBillBar = ({
  onSearch,
  onAdd,
  onChange,
  selected_vehicleType,
  selected_partType,
  selected_manufacturer,
}) => (
  <Container>
    <TextField fullWidth style={{ margin: '8px 0px 0px 0px' }} hintText="Part ID" />
    <TextField fullWidth style={{ margin: '8px 0px 0px 0px' }} hintText="Customer ID" />
    <TextField fullWidth style={{ margin: '8px 0px 0px 0px' }} hintText="Customer Name" />
    <TextField fullWidth style={{ margin: '8px 0px 0px 0px' }} hintText="Contact Number" />
    <TextField fullWidth style={{ margin: '8px 0px 16px 0px' }} hintText="Employee ID" />
    <FlatButton
      backgroundColor="#0277BD"
      hoverColor="#01579B"
      fullWidth
      icon={<AddIcon size={24} color={theme.canvasColor} />}
    />
  </Container>
);

export default AddPartToBillBar;
