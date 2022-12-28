import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOAING';

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);
