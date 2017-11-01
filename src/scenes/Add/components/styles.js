import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.12) 1px 0px 6px, rgba(0, 0, 0, 0.12) 1px 0px 4px;
  background-color: ${theme.canvasColor};
  padding: 12px 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
