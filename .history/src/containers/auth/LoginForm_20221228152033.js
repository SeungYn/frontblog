import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
};
