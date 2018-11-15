import articleReducer from '../reducers/ArticleReducer';
import * as types from '../actions/ActionTypes';
 
const initialState = {
  articles: [],
  article: [],
  like: [],
  errors: [],
};
 
const liked = "liked"
const disliked = "disliked"
 
const LikedData = {
  status: { username: 'testuser', action: true, article: 'testarticle' },
};
 
const DislikedData = {
  status: { username: 'testuser', action: false, article: 'testarticle' },
};
 
 
describe('Article reducer: Like/Dislike articles', () => {
  it('should return the initial state', () => {
    expect(articleReducer(initialState, {})).toEqual(initialState);
  });
 
  it('should handle ARTICLE_LIKED', () => {
    expect(articleReducer(initialState, {
      type: types.ARTICLE_LIKED,
      payload: LikedData,
    })).toEqual(
      {
        articles: [],
        article: [],
        like: liked,
        errors: [],
      },
    );
  });
 
  it('should handle LOGIN_FAILURE', () => {
    expect(articleReducer(initialState, {
      type: types.ARTICLE_DISLIKED,
      payload: DislikedData,
    })).toEqual(
      {
        articles: [],
        article: [],
        like: disliked,
        errors: [],
      },
    );
  });
});
