import styled from 'styled-components';
import { theme } from '../../../utils/theme';

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
  z-index: 999;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 52px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.color};
    opacity: ${props => (props.currentPath !== '/' || props.userLevel === 0 ? 1 : 0.5)};
    z-index: -1;
  }
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
