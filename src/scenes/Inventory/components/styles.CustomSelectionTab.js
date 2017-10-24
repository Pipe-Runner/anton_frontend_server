import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const Container = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.12) 1px 0px 6px, rgba(0, 0, 0, 0.12) 1px 0px 4px;
  background-color: ${theme.canvasColor};
  align-items: center;
  justify-content: center;
  & > * + * {
    margin: 0px 0px 0px 8px;
  }
`;
