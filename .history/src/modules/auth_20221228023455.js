import { createAction, handleActions } from 'redux-actions';

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';
export const sampleACTION = createAction(SAMPLE_ACTION);

const initialState = { a: 1 };

const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState
);

export default auth;
