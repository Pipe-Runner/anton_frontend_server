import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const Container = styled.div`
  height: 52px;
  background-color: ${theme.primary1Color};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  height: 42px;
  align-items: center;
`;

export const ProfileNameWrapper = styled.div`
  line-height: 42px;
  vertical-align: middle;
  color: #f5f5f5;
  font-size: 20px;
  margin: 0px 8px 0px 0px;
`;

export const Spacer = styled.div`flex: 1;`;
