import React from 'react';
import {
  NotificationContainer,
  NotificationWrapper,
  NotificationHeading,
  NotificationBody,
} from './styles';

const Notification = () => (
  <NotificationContainer>
    <NotificationWrapper>
      <NotificationHeading>Admin</NotificationHeading>
      <NotificationBody>20% OFF on all car wash this month!!</NotificationBody>
    </NotificationWrapper>
  </NotificationContainer>
);

export default Notification;
