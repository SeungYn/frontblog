import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, action) => state,
  },
  initialState
);

export default auth;
