import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedLogo from '../../../images/logo.gif';
import Divider from 'material-ui/Divider';
import { Container, GifContainer, MenuItemsContainer } from './styles.NavBar';
import InventoryIcon from 'react-icons/lib/go/tools';
import TransactionIcon from 'react-icons/lib/fa/dollar';
import EmpoyeesIcon from 'react-icons/lib/fa/user';
import SalaryIcon from 'react-icons/lib/go/repo';
import HistoryIcon from 'react-icons/lib/md/history';
import FlatButton from 'material-ui/FlatButton';

const NavBar = () => (
  <Container>
    <GifContainer src={AnimatedLogo} />
    <MenuItemsContainer>
      <NavLink to="/inventory">
        <FlatButton
          style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 32px' }}
          labelStyle={{ margin: '0px 0px 0px 16px' }}
          fullWidth
          label="Inventory"
          icon={<InventoryIcon size={24} />}
        />
      </NavLink>
      <Divider />
      <NavLink to="/transaction">
        <FlatButton
          style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 32px' }}
          labelStyle={{ margin: '0px 0px 0px 16px' }}
          fullWidth
          label="Transaction"
          icon={<TransactionIcon size={24} />}
        />
      </NavLink>
      <Divider />
      <NavLink to="/employee">
        <FlatButton
          style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 32px' }}
          labelStyle={{ margin: '0px 0px 0px 16px' }}
          fullWidth
          label="Employees"
          icon={<EmpoyeesIcon size={24} />}
        />
      </NavLink>
      <Divider />
      <NavLink to="/salary">
        <FlatButton
          style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 32px' }}
          labelStyle={{ margin: '0px 0px 0px 16px' }}
          fullWidth
          label="Salary"
          icon={<SalaryIcon size={24} />}
        />
      </NavLink>
      <Divider />
      <NavLink to="/history">
        <FlatButton
          style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 32px' }}
          labelStyle={{ margin: '0px 0px 0px 16px' }}
          fullWidth
          label="History"
          icon={<HistoryIcon size={24} />}
        />
      </NavLink>
      <Divider />
    </MenuItemsContainer>
  </Container>
);

export default NavBar;
