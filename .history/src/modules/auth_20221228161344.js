import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, (from) => from);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState
);

export default auth;
