import {
  FETCH_ARTICLES,
  NEW_ARTICLE,
  SINGLE_ARTICLE,
  ERROR_ARTICLE,
  ARTICLE_LIKED,
  ARTICLE_DISLIKED,
} from '../actions/ActionTypes';
 
const initialState = {
  articles: [],
  article: [],
  like: [],
  errors: [],
};
const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, articles: action.payload };
    case NEW_ARTICLE:
      return { ...state, article: action.payload };
    case SINGLE_ARTICLE:
      return { ...state, article: action.payload };
    case ERROR_ARTICLE:
      return { ...state, errors: action.payload };
    case ARTICLE_LIKED:
      return { ...state, like: 'liked' };
    case ARTICLE_DISLIKED:
      return { ...state, like: 'disliked' };
    default:
      return state;
  }
};
export default articleReducer;