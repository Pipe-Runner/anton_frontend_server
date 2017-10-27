import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Spacer } from './styles.Appbar';
import RaisedButton from 'material-ui/RaisedButton';
import LoginIcon from 'react-icons/lib/go/key';
import LogoutIcon from 'react-icons/lib/go/lock';
import SignupIcon from 'react-icons/lib/go/plus';
import HomeIcon from 'react-icons/lib/go/home';
import DashboardIcon from 'react-icons/lib/fa/line-chart';

const Appbar = ({
  isAdmin,
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
    {isAdmin ? (
      <NavLink to={currentPath === '/' ? '/inventory' : '/'}>
        <RaisedButton
          style={{ margin: '0px 12px 0px 0px' }}
          label={currentPath === '/' ? 'Dashboard' : 'Home'}
          icon={
            currentPath === '/' ? (
              <DashboardIcon size={18} color={'#F57F17'} />
            ) : (
              <HomeIcon size={18} color={'#0288D1'} />
            )
          }
        />
      </NavLink>
    ) : (
      undefined
    )}
    <Spacer />
    {username === undefined ? (
      <RaisedButton
        onClick={() => dispatchShowModal('Signup', 'SIGNUP', dispatchSignup)}
        style={{ margin: '0px 12px 0px 0px' }}
        label="Sign Up"
        icon={<SignupIcon size={18} color={'#7B1FA2'} />}
      />
    ) : (
      undefined
    )}
    <RaisedButton
      onClick={
        username === undefined
          ? () => dispatchShowModal('Login', 'LOGIN', dispatchLogin)
          : dispatchLogout
      }
      label={username === undefined ? 'Login' : 'Logout'}
      icon={
        username === undefined ? (
          <LoginIcon size={18} color={'#388E3C'} />
        ) : (
          <LogoutIcon size={18} color={'#D32F2F'} />
        )
      }
    />
  </Container>
);

export default Appbar;
