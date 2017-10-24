import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Spacer } from './styles.Appbar';
import RaisedButton from 'material-ui/RaisedButton';
import LoginIcon from 'react-icons/lib/go/key';
import LogoutIcon from 'react-icons/lib/go/lock';
import SignupIcon from 'react-icons/lib/go/plus';
import HomeIcon from 'react-icons/lib/go/home';
import DashboardIcon from 'react-icons/lib/fa/line-chart';
import RepairNowIcon from 'react-icons/lib/fa/gavel';

const Appbar = ({
  token,
  adminUser,
  username,
  loginDataLoading,
  signupDataLoading,
  dispatchShowModal,
  dispatchLogin,
  dispatchLogout,
  dispatchSignup,
  currentPath,
}) => (
  <Container>
    {adminUser
      ? <NavLink to={currentPath === '/' ? '/inventory' : '/'}>
          <RaisedButton
            style={{ margin: '0px 12px 0px 0px' }}
            label={currentPath === '/' ? 'Dashboard' : 'Home'}
            icon={
              currentPath === '/'
                ? <DashboardIcon size={18} color={'#F57F17'} />
                : <HomeIcon size={18} color={'#0288D1'} />
            }
          />
        </NavLink>
      : undefined}
    {adminUser
      ? <RaisedButton label="Repair" icon={<RepairNowIcon size={18} color={'#6D4C41'} />} />
      : undefined}
    <Spacer />
    {token === undefined
      ? <RaisedButton
          onClick={() => dispatchShowModal('Signup', 'SIGNUP', dispatchSignup)}
          style={{ margin: '0px 12px 0px 0px' }}
          label="Sign Up"
          icon={<SignupIcon size={18} color={'#7B1FA2'} />}
        />
      : undefined}
    <RaisedButton
      onClick={
        token === undefined
          ? () => dispatchShowModal('Login', 'LOGIN', dispatchLogin)
          : dispatchLogout
      }
      label={token === undefined ? 'Login' : 'Logout'}
      icon={
        token === undefined
          ? <LoginIcon size={18} color={'#388E3C'} />
          : <LogoutIcon size={18} color={'#D32F2F'} />
      }
    />
  </Container>
);

export default Appbar;
