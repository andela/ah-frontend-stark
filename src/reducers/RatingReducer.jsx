import {
  ARTICLE_RATED,
  RATING_ERROR,
  RATING_NOT_ALLOWED,
} from '../actions/types';


const initialState = {};

export default function ratingReducer(state = initialState, action) {
  switch (action.type) {
    case RATING_ERROR:
      return {
        ...state, message: action.payload.detail,
      };

    case RATING_NOT_ALLOWED:
      return {
        ...state, message: action.payload.detail,
      };

    case ARTICLE_RATED:
      return {
        ...state, rating: action.payload.rating,
      };
    default:
      return state;
  }
}
