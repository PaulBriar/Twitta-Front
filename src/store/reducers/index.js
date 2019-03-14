import { combineReducers } from 'redux';
import currentUser from './errors';
import errors from './errors';

const rootReducer = combineReducers({
  currentUser,
  errors
});

export default rootReducer;