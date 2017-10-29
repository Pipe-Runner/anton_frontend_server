import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import reminderbackground from '../../../images/reminder.jpg';

export const OrdersContainer = styled.div`
  width: 284px;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin: 16px 0px 0px 0px;
  }
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
  border-radius: 5px;
  overflow: hidden;
  background: ${theme.canvasColor};
  height: 172px;
`;

export const IdWrapper = styled.div`
  flex: 1;
  background-image: url(${reminderbackground});
  background-size: cover;
  background-position: bottom;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    z-index: 0px;
  }
`;

export const MomentData = styled.div`
  flex: 1;
  background: #ff9800;
  display: flex;
  justify-content: center;
  line-height: 36px;
  text-align: middle;
  font-size: 20px;
  color: ${theme.textColor};
  height: 36px;
`;

export const MomentWrapper = styled.div`
  display: flex;

  & > * + * {
    border-left: solid 0.5px #424242;
  }
`;

export const IdData = styled.div`
  position: relative;
  font-size: 32px;
  color: ${theme.alternateTextColor};
  height: 32px;
  z-index: 2px;
  margin: 0px 0px 16px 0px;
`;

export const ServiceContainer = styled.div`
  flex: 1;
  margin: 0px 0px 0px 16px;
`;

export const NotificationContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 16px;
`;

export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
  border-radius: 2px;
  overflow: hidden;
  background: ${theme.canvasColor};
`;

export const NotificationHeading = styled.div`
  height: 28px;
  background-color: #e1f5fe;
  padding: 4px 4px 4px 4px;
  font-weight: 500;
  text-align: center;
  color: #0277bd;
  font-size: 20px;
`;

export const NotificationBody = styled.div`
  display: flex;
  overflow: hidden;
  background: ${theme.canvasColor};
  margin: 4px 4px 4px 4px;
  color: #78909c;
  font-size: 16px;
`;
