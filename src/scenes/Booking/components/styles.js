import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 16px 16px;

  & > * + * {
    margin: 16px 0px 0px 0px;
  }
`;

export const Spacer = styled.div`flex: 1;`;

export const ButtonContainer = styled.div`align-self: flex-end;`;

export const PaymentInfoWrapper = styled.div`
  margin: 32px 0px 0px 0px;
  font-size: 20px;
  color: #00897b;
`;
