import styled from 'styled-components';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPageBlock = styled.div``;

const LoginPage = () => {
  return (
    <LoginPageBlock>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </LoginPageBlock>
  );
};

export default LoginPage;
