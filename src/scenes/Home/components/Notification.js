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
      <NotificationBody>This is to notify that you are fucked up!!</NotificationBody>
    </NotificationWrapper>
  </NotificationContainer>
);

export default Notification;
