import { combineReducers } from 'redux';

import auth from './auth';
import loading from './loading';
const rootReducer = combineReducers({ auth });

export default rootReducer;
