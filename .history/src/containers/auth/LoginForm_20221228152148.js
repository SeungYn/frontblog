import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../modules/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  };
};
