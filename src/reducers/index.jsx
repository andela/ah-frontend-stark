import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import articleReducer from './ArticleReducer';

export default combineReducers({
  articles: articleReducer,
  login: loginReducer,

});
