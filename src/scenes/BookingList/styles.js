import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 16px 0px 16px;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 8px 0px 0px 16px;
  flex-direction: column;
  min-width: 320px;

  > * + * {
    margin: 16px 0px 0px 0px;
  }
`;

export const TableWrapper = styled.div`
  margin: 8px 0px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.12) 1px 0px 6px, rgba(0, 0, 0, 0.12) 1px 0px 4px;
`;
