import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedLogo from '../../../images/logo.gif';
import Divider from 'material-ui/Divider';
import { Container, GifContainer, MenuItemsContainer } from './styles.NavBar';
import InventoryIcon from 'react-icons/lib/go/tools';
import TransactionIcon from 'react-icons/lib/fa/dollar';
import UserIcon from 'react-icons/lib/fa/user';
import BookingIcon from 'react-icons/lib/go/repo';
import HistoryIcon from 'react-icons/lib/md/history';
import AddPartsIcon from 'react-icons/lib/md/add-circle';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';

const NavBar = ({
  currentPath,
  userLevel,
  loadingInventoryData,
  loadingTransactionData,
  loadingBookingListData,
  loadingHistoryData,
  loadingAddData,
  loadingUserData,
}) => (
  <Container>
    <GifContainer src={AnimatedLogo} />
    <MenuItemsContainer>
      <NavLink to="/inventory">
        <FlatButton
          style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 16px' }}
          labelStyle={{ margin: '0px 0px 0px 16px' }}
          fullWidth
          label="Inventory"
          icon={<InventoryIcon size={24} />}
          backgroundColor={currentPath === '/inventory' ? '#FFCDD2' : undefined}
        />
      </NavLink>
      {loadingInventoryData ? <LinearProgress mode="indeterminate" color="#EC407A" /> : undefined}
      <Divider />
      <NavLink to="/transaction">
        <FlatButton
          style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 16px' }}
          labelStyle={{ margin: '0px 0px 0px 16px' }}
          fullWidth
          label="Transaction"
          icon={<TransactionIcon size={24} />}
          backgroundColor={currentPath === '/transaction' ? '#FFCDD2' : undefined}
        />
      </NavLink>
      {loadingTransactionData ? <LinearProgress mode="indeterminate" color="#EC407A" /> : undefined}
      <Divider />
      <NavLink to="/bookinglist">
        <FlatButton
          style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 16px' }}
          labelStyle={{ margin: '0px 0px 0px 16px' }}
          fullWidth
          label="Bookings"
          icon={<BookingIcon size={24} />}
          backgroundColor={currentPath === '/bookinglist' ? '#FFCDD2' : undefined}
        />
      </NavLink>
      {loadingBookingListData ? <LinearProgress mode="indeterminate" color="#EC407A" /> : undefined}
      <Divider />
      <NavLink to="/history">
        <FlatButton
          style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 16px' }}
          labelStyle={{ margin: '0px 0px 0px 16px' }}
          fullWidth
          label="History"
          icon={<HistoryIcon size={24} />}
          backgroundColor={currentPath === '/history' ? '#FFCDD2' : undefined}
        />
      </NavLink>
      {loadingHistoryData ? <LinearProgress mode="indeterminate" color="#EC407A" /> : undefined}
      <Divider />
      {userLevel === 2 ? (
        <div>
          <NavLink to="/add">
            <FlatButton
              style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 16px' }}
              labelStyle={{ margin: '0px 0px 0px 16px' }}
              fullWidth
              label="Add Items"
              icon={<AddPartsIcon size={24} />}
              backgroundColor={currentPath === '/add' ? '#FFCDD2' : undefined}
            />
          </NavLink>
          {loadingAddData ? <LinearProgress mode="indeterminate" color="#EC407A" /> : undefined}
          <Divider />
        </div>
      ) : (
        undefined
      )}
      {userLevel === 2 ? (
        <div>
          <NavLink to="/user">
            <FlatButton
              style={{ height: 64, textAlign: 'left', padding: '0px 0px 0px 16px' }}
              labelStyle={{ margin: '0px 0px 0px 16px' }}
              fullWidth
              label="Users"
              icon={<UserIcon size={24} />}
              backgroundColor={currentPath === '/user' ? '#FFCDD2' : undefined}
            />
          </NavLink>
          {loadingUserData ? <LinearProgress mode="indeterminate" color="#EC407A" /> : undefined}
          <Divider />
        </div>
      ) : (
        undefined
      )}
    </MenuItemsContainer>
  </Container>
);

export default NavBar;
