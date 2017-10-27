import styled from 'styled-components';
import { theme } from '../../utils/theme';
import homebackground from '../../images/home.jpg';
import promotionbackground from '../../images/background.gif';
import { reminderbackground } from '../../images/reminder.jpg';

export const Container = styled.div`
  padding: 16px 16px 0px 16px;
  background-image: url(${homebackground});
  display: flex;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: top;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
    z-index: 0px;
  }

  & > * {
    position: relative;
    z-index: 2px;
  }
`;

export const FabContainer = styled.div`
  position: absolute;
  margin: 0px 24px 24px 0px;
  bottom: 0px;
  right: 0px;
`;

export const OrdersContainer = styled.div`
  width: 284px;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin: 8px 0px 0px 0px;
  }
`;

export const PromotionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  font-size: 82px;
  font-weight: 300;
  color: ${theme.alternateTextColor};
`;

export const Logo = styled.div``;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: -1px 15px 30px -12px black;
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

export const IdData = styled.div`
  position: relative;
  font-size: 32px;
  color: ${theme.alternateTextColor};
  height: 32px;
  z-index: 2px;
  margin: 0px 0px 16px 0px;
`;

export const MomentWrapper = styled.div`
  display: flex;

  & > * + * {
    border-left: solid 0.5px #424242;
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

export const GifContainer = styled.div`
  position: relative;
  display: flex;
  padding: 16px 16px 0px 16px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(${promotionbackground});
  background-size: cover;
  background-position: 50% 50%;
`;
