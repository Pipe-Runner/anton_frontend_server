import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.12) 1px 0px 6px, rgba(0, 0, 0, 0.12) 1px 0px 4px;
  background-color: ${theme.canvasColor};
  padding: 12px;
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 6px 0px 0px 0px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 8px 0px 0px 0px;
`;

export const PaymentInfoWrapper = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px;
  line-height: 36px;
  vertical-align: middle;
`;
