import React from 'react';
import Appbar from './components/Appbar';
import NavBar from './components/NavBar';
import Snackbar from 'material-ui/Snackbar';
import { Redirect } from 'react-router-dom';
import { Container, ContentWrapper, MainContentWrapper } from './styles';

const AppShell = ({
  children,
  fullName,
  userId,
  contactNumber,
  userLevel,
  loginDataLoading,
  signupDataLoading,
  dispatchShowModal,
  dispatchLogin,
  dispatchSignup,
  dispatchLogout,
  location,
  isSnackBarOpen,
  snackBarMessage,
  dispatchResetSnackBar,
}) => (
  <Container>
    <Appbar
      userLevel={userLevel}
      fullName={fullName}
      userId={userId}
      contactNumber={contactNumber}
      loginDataLoading={loginDataLoading}
      signupDataLoading={signupDataLoading}
      dispatchShowModal={dispatchShowModal}
      dispatchLogin={dispatchLogin}
      dispatchSignup={dispatchSignup}
      dispatchLogout={dispatchLogout}
      currentPath={location.pathname}
    />
    <ContentWrapper>
      {userId !== undefined && userLevel >= 1 && location.pathname !== '/' ? (
        <NavBar userLevel={userLevel} currentPath={location.pathname} />
      ) : (
        undefined
      )}
      <MainContentWrapper>
        {(userId === undefined && location.pathname !== '/') ||
        (userId === 0 &&
          location.pathname !== '/' &&
          location.pathname !== '/booking' &&
          location.pathname !== '/about') ? (
          <Redirect to="/" />
        ) : (
          undefined
        )}
        {children}
      </MainContentWrapper>
    </ContentWrapper>
    <Snackbar
      open={isSnackBarOpen === undefined ? false : isSnackBarOpen}
      message={snackBarMessage === undefined ? '' : snackBarMessage}
      autoHideDuration={4000}
      onRequestClose={dispatchResetSnackBar}
    />
  </Container>
);

export default AppShell;
