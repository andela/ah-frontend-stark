import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import profileReducer from './profileReducers';

export default combineReducers({
  login: loginReducer,
  profile: profileReducer,
});
