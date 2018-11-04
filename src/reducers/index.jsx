import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import articleReducer from './ArticleReducer';
import profileReducer from './profileReducers';
import userReducer from './userReducer';

export default combineReducers({
  articles: articleReducer,
  login: loginReducer,
  profile: profileReducer,
  users: userReducer,
});
