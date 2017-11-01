import styled from 'styled-components';
import { theme } from '../../utils/theme';
import formBackground from '../../images/formbackground.jpg';

export const Container = styled.div`
  padding: 16px 0px 0px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${formBackground});
  padding: 16px 0px 16px 0px;
`;

export const MainWrapper = styled.div`
  width: 820px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.12) 1px 0px 6px, rgba(0, 0, 0, 0.12) 1px 0px 4px;
  border-radius: 2px;
  background-color: ${theme.canvasColor};
  & > * {
    margin: 16px;
  }
`;

export const ContentWrapper = styled.div`height: 100%;`;
