import styled from 'styled-components';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
const RegisterPageBlock = styled.div``;

const RegisterPage = () => {
  return (
    <RegisterPageBlock>
      <AuthTemplate>
        <AuthForm type={'register'} />
      </AuthTemplate>
    </RegisterPageBlock>
  );
};

export default RegisterPage;
