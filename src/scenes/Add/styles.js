import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 16px 16px 16px;
  display: flex;
  flex-direction: row;

  & > * + * {
    margin: 0px 0px 0px 16px;
  }
`;

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin: 16px 0px 0px 0px;
  }
`;
