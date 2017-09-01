import styled from 'styled-components';

export const Container = styled.div`
  width: 256px;
  z-index: 997;
  display: flex;
  flex-direction: column;
`;

export const GifContainer = styled.img`
  height: 184px;
  width: 256px;
  z-index: 998;
  box-shadow: rgba(0, 0, 0, 0.12) 1px 0px 6px, rgba(0, 0, 0, 0.12) 1px 0px 4px;
`;

export const MenuItemsContainer = styled.div`
  flex: 1;
  width: 256px;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
`;
