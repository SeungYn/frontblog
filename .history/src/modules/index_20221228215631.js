import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
const rootReducer = combineReducers({ auth, loading });

export function* rootSaga(args) {
  console.log('saga');
  console.log(args);
  yield all([authSaga()]);
}
export default rootReducer;
