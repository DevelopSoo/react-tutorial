import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInner = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 360px;
  margin-bottom: 12px;
`;

export const ButtonWrapper = styled(Link)`
  width: 360px;
  margin-bottom: 24px;
`;

export const GotoLink = styled(Link)`
  width: 360px;
`;
