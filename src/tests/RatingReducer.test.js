import ratingReducer from '../reducers/RatingReducer';
import * as types from '../actions/types';

const initialState = {
  rating: '',
  message: '',
};

const articleData = {
  author: 3,
  body: 'This is a test article body.',
  createdAt: '2018-11-15T11:03:54.832984Z',
  description: 'Test description',
  dislikes: 0,
  favoritesCount: 0,
  image: '',
  likes: 0,
  rating: 4,
  ratingsCount: 1,
  slug: 'test-article-title',
  tagList: "['Health', 'Safety']",
  title: 'Test Article Title',
  updatedAt: '2018-11-15T11:03:54.833035Z',
};

describe('Rating reducer', () => {
  it('should return the initial state', () => {
    expect(ratingReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle ARTICLE_RATED', () => {
    expect(ratingReducer(initialState, {
      type: types.ARTICLE_RATED,
      payload: articleData,
    })).toEqual(
      {
        rating: 4,
        message: '',
      },
    );
  });

  it('should handle RATING_ERROR', () => {
    const unAuthData = {
      detail: 'The token is invalid',
    };
    expect(ratingReducer(initialState, {
      type: types.RATING_ERROR,
      payload: unAuthData,
    })).toEqual(
      {
        rating: '',
        message: 'The token is invalid',
      },
    );
  });

  it('should handle RATING_NOT_ALLOWED', () => {
    const unAuthData = {
      detail: 'Sorry, you cannot rate your own article.',
    };
    expect(ratingReducer(initialState, {
      type: types.RATING_NOT_ALLOWED,
      payload: unAuthData,
    })).toEqual(
      {
        rating: '',
        message: 'Sorry, you cannot rate your own article.',
      },
    );
  });
});
