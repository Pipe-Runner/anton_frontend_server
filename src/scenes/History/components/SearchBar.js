import React from 'react';
import { Container } from './styles';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from 'react-icons/lib/md/search';
import { theme } from '../../../utils/theme';

const searchBar = ({ onSearch, onChange, startDate, endDate }) => (
  <Container>
    <TextField fullWidth style={{ margin: '8px 0px 0px 0px' }} hintText="Start Date" />
    <TextField fullWidth style={{ margin: '8px 0px 0px 0px' }} hintText="End Date" />
    <FlatButton
      backgroundColor="#0277BD"
      hoverColor="#01579B"
      fullWidth
      icon={<SearchIcon size={24} color={theme.canvasColor} />}
    />
  </Container>
);

export default searchBar;
