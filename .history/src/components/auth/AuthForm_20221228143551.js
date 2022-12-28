import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${palette.gray[2]};
  font-size: 1rem;
  width: 100%;
  padding-bottom: 0.5rem;
  outline: none;
  &:focus {
    color: red;
  }
`;

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <StyledInput
        name='username'
        placeholder='아이디'
        autoComplete='username'
      />
    </AuthFormBlock>
  );
};

export default AuthForm;
