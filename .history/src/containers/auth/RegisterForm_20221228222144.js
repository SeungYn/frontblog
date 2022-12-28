import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, register } from '../../modules/auth';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth, user }) => {
    return {
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
    };
  });
  const navigate = useNavigate();
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      return;
    }
    console.log('진행');
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  useEffect(() => {
    dispatch(initializeForm('register'));
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <AuthForm
      type='register'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
