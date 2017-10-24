import React from 'react';
import { Container } from './styles.CustomSelectionTab';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'react-icons/lib/md/search';
import AddIcon from 'react-icons/lib/md/add';
import { theme } from '../../../utils/theme';

const vehicleType = ['2 wheeler', '4 wheeler'];
const partsType = { '2 wheeler': [], '4 wheeler': [] };

const CustomSelectionTab = ({
  onSearch,
  onAdd,
  onChange,
  selected_vehicleType,
  selected_partType,
  selected_manufacturer,
}) => (
  <Container>
    <SelectField
      style={{ width: '130px' }}
      floatingLabelText="Vehicle Type"
      value={selected_vehicleType}
      onChange={onChange}
    >
      {vehicleType.map((value, index) => (
        <MenuItem key={index} value={value} primaryText={value} />
      ))}
    </SelectField>
    <SelectField
      style={{ width: '150px' }}
      floatingLabelText="Parts Type"
      value={selected_vehicleType}
      onChange={onChange}
    >
      {vehicleType.map((value, index) => (
        <MenuItem key={index} value={value} primaryText={value} />
      ))}
    </SelectField>
    <SelectField floatingLabelText="Manufacturer" value={selected_vehicleType} onChange={onChange}>
      {vehicleType.map((value, index) => (
        <MenuItem key={index} value={value} primaryText={value} />
      ))}
    </SelectField>
    <TextField style={{ width: '150px', margin: '24px 0px 0px 8px' }} hintText="Location" />
    <TextField style={{ width: '150px', margin: '24px 0px 0px 8px' }} hintText="Price" />
    <TextField style={{ width: '200px', margin: '24px 0px 0px 8px' }} hintText="Supplier" />
    <TextField style={{ width: '200px', margin: '24px 0px 0px 8px' }} hintText="Model Number" />
    <FlatButton
      style={{ margin: '0px 0px 0px 8px', height: 52 }}
      backgroundColor="#0277BD"
      hoverColor="#01579B"
      icon={<SearchIcon size={24} color={theme.canvasColor} />}
    />
    <FlatButton
      style={{ margin: '0px 0px 0px 8px', height: 52 }}
      backgroundColor="#388E3C"
      hoverColor="#2E7D32"
      icon={<AddIcon size={24} color={theme.canvasColor} />}
    />
  </Container>
);

export default CustomSelectionTab;
