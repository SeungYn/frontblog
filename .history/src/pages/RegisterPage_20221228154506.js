import styled from 'styled-components';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
const RegisterPageBlock = styled.div``;

const RegisterPage = () => {
  return (
    <RegisterPageBlock>
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </RegisterPageBlock>
  );
};

export default RegisterPage;
