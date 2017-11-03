import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Wrapper,
  ProfileInfoContainer,
  ProfileNameWrapper,
  Spacer,
} from './styles.Appbar';
import RaisedButton from 'material-ui/RaisedButton';
import LoginIcon from 'react-icons/lib/go/key';
import LogoutIcon from 'react-icons/lib/go/lock';
import SignupIcon from 'react-icons/lib/go/plus';
import HomeIcon from 'react-icons/lib/go/home';
import DashboardIcon from 'react-icons/lib/fa/line-chart';
import Paper from 'material-ui/Paper';
import UserIcon from 'react-icons/lib/md/account-circle';
import SuperUserIcon from 'react-icons/lib/md/flash-on';
import AdminIcon from 'react-icons/lib/md/visibility';
import LinearProgress from 'material-ui/LinearProgress';

const getColor = (userLevel, currentPath) => {
  if (currentPath === '/' && (userLevel === undefined || userLevel !== 0)) {
    return '#ff7043';
  } else if (userLevel === 0) {
    return '#FFA000';
  } else if (userLevel === 1) {
    return '#2196F3';
  } else if (userLevel === 2) {
    return '#5C6BC0';
  }
};

const Appbar = ({
  userId,
  userLevel,
  fullName,
  contactNumber,
  dispatchShowModal,
  dispatchLogin,
  dispatchLogout,
  dispatchSignup,
  currentPath,
}) => {
  return (
    <Container>
      <Wrapper
        currentPath={currentPath}
        userLevel={userLevel}
        color={getColor(userLevel, currentPath)}
      >
        {userId === undefined ? (
          undefined
        ) : (
          <ProfileInfoContainer>
            <Paper
              style={{
                height: 42,
                width: 42,
                textAlign: 'center',
                display: 'inline-block',
                margin: '0px 8px 0px 0px',
              }}
              zDepth={1}
              circle={true}
            >
              <UserIcon size={42} color="#3F51B5" />
            </Paper>
            <ProfileNameWrapper>
              <span style={{ fontWeight: '500', color: '#FAFAFA' }}>{fullName}</span>
            </ProfileNameWrapper>
            {userLevel === 1 ? <AdminIcon size={36} color="#FFEE58" /> : undefined}
            {userLevel === 2 ? <SuperUserIcon size={36} color="#FFEE58" /> : undefined}
          </ProfileInfoContainer>
        )}
        <Spacer />
        {userLevel === 1 || userLevel === 2 ? (
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
        {userId === undefined ? (
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
            userId === undefined
              ? () => dispatchShowModal('Login', 'LOGIN', dispatchLogin)
              : dispatchLogout
          }
          label={userId === undefined ? 'Login' : 'Logout'}
          icon={
            userId === undefined ? (
              <LoginIcon size={18} color={'#388E3C'} />
            ) : (
              <LogoutIcon size={18} color={'#D32F2F'} />
            )
          }
        />
      </Wrapper>
      {/* <LinearProgress mode="indeterminate" color="#1A237E" /> */}
    </Container>
  );
};

export default Appbar;
