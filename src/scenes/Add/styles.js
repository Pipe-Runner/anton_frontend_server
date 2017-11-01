import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 16px 16px 16px;
  display: flex;
  flex-direction: row;

  & > * + * {
    margin: 0px 0px 0px 16px;
  }
`;
