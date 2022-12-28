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
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput
          name='username'
          placeholder='아이디'
          autoComplete='username'
        />
        <StyledInput
          name='password'
          placeholder='비밀번호'
          autoComplete='password'
        />
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
			<Footer>
				{type === 'login' ? (<Link to="/register">회원가입</Link>)}
        <Link to={`${text === '로그인' ? '/register' : '/login'}`}>{`${
          text === '로그인' ? '회원가입' : '로그인'
        }`}</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
