import styled from 'styled-components';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const LoginPageBlock = styled.div``;

const LoginPage = () => {
  return (
    <LoginPageBlock>
      <AuthTemplate>
        <AuthForm />
      </AuthTemplate>
    </LoginPageBlock>
  );
};

export default LoginPage;
