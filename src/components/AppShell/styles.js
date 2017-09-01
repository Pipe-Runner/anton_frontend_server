import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  flex: 1;
  display: flex;
`;

export const MainContentWrapper = styled.div`
  flex: 1;
  height: calc( 100vh - 72px );
  padding: 24px 24px 0px 24px;
  overflow-y: auto;
`;
