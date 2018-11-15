import {
  FETCH_ARTICLES, NEW_ARTICLE, SINGLE_ARTICLE, ERROR_ARTICLE,
} from '../actions/ActionTypes';

const initialState = {
  articles: [],
  article: [],
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
    default:
      return state;
  }
};
export default articleReducer;
