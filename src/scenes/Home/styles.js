import styled from 'styled-components';
import { theme } from '../../utils/theme';
import homebackground from '../../images/home.jpg';
import promotionbackground from '../../images/background.gif';
import cardbackground from '../../images/card.jpg';

export const Container = styled.div`
  position: relative;
  padding: 16px 16px 0px 16px;
  background-image: url(${homebackground});
  display: flex;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 80%;

  & > * {
    z-index: 2px;
  }
`;

export const FabContainer = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
`;

export const PromotionContainer = styled.div`
  position: relative;
  left: 50%;
  top: 40%;
  width: 800px;
  height: 400px;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;
  border-radius: 8px;

  @media (max-width: 1300px) {
    width: 600px;
    height: 300px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${cardbackground});
    opacity: 0.8;
    z-index: 0;
    border-radius: 8px;
  }
`;

export const TitleWrapper = styled.div`
  font-size: 52px;
  font-weight: 500;
  color: #f50057;
  font-family: 'Nosifer', cursive;
  z-index: 1;

  @media (max-width: 1300px) {
    font-size: 42px;
  }
`;

export const Logo = styled.div`margin: '32px 0px 0px 0px';`;

export const GifContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(${promotionbackground});
  background-size: cover;
  background-position: 50% 50%;
`;

export const Button = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.12) 1px 0px 6px, rgba(0, 0, 0, 0.12) 1px 0px 4px;
  background-color: ${theme.canvasColor};
  border-radius: 8px;
`;

export const SocialMediaContainer = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin: 8px 0px 0px 0px;
  }
`;
