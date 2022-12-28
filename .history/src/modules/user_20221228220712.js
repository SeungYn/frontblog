import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

//새로고침 이후 임시 로그인 처리
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECKFAILURE] =
  createRequestActionTypes('user/CHECK');

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
