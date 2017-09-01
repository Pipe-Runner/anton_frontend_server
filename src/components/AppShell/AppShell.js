import React from 'react';
import Appbar from './components/Appbar';
import NavBar from './components/NavBar';
import { Redirect } from 'react-router-dom';
import { Container, ContentWrapper, MainContentWrapper } from './styles';

const AppShell = ({
  children,
  token,
  username,
  adminUser,
  loginDataLoading,
  signupDataLoading,
  dispatchShowModal,
  dispatchLogin,
  dispatchLogout,
  dispatchSignup,
  location,
}) => (
  <Container>
    <Appbar
      token={token}
      adminUser={adminUser}
      username={username}
      loginDataLoading={loginDataLoading}
      signupDataLoading={signupDataLoading}
      dispatchShowModal={dispatchShowModal}
      dispatchLogin={dispatchLogin}
      dispatchLogout={dispatchLogout}
      dispatchSignup={dispatchSignup}
      currentPath={location.pathname}
    />
    <ContentWrapper>
      {location.pathname !== '/' ? <NavBar currentPath={location.pathname} /> : undefined}
      <MainContentWrapper>
        {username === undefined && token === undefined ? <Redirect to="/" /> : undefined}
        {children}
      </MainContentWrapper>
    </ContentWrapper>
  </Container>
);

export default AppShell;
