import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import articleReducer from './ArticleReducer';
import profileReducer from './profileReducers';
import userReducer from './userReducer';
import ratingReducer from './RatingReducer';
import restPasswordReducer from './ResetPasswordReducer';
import updatePasswordReducer from './updatePasswordReducer';

export default combineReducers({
  articles: articleReducer,
  profile: profileReducer,
  users: userReducer,
  rating: ratingReducer,
  login: loginReducer,
  reset: restPasswordReducer,
  password_update: updatePasswordReducer,
});
