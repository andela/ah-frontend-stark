import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import articleReducer from './ArticleReducer';
import profileReducer from './profileReducers';
import userReducer from './userReducer';
import ratingReducer from './RatingReducer';
import restPasswordReducer from './ResetPasswordReducer';
import updatePasswordReducer from './updatePasswordReducer';
import commentReducer from './commentReducer';
import repliesReducer from './RepliesReducer';

export default combineReducers({
  articles: articleReducer,
  profile: profileReducer,
  users: userReducer,
  rating: ratingReducer,
  login: loginReducer,
  reset: restPasswordReducer,
  password_update: updatePasswordReducer,
  comments: commentReducer,
  comment: repliesReducer,
});
