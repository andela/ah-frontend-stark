import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import { rateArticle } from '../actions/RatingAction';


const baseurl = 'https://ah-backend-stark-staging.herokuapp.com';
let store;

const mockStore = configureStore([thunk]);

describe('async rating actions', () => {
  beforeEach(() => {
    store = mockStore({
      rating: '',
      message: '',
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates ARTICLE_RATED when a user rates an article', () => {
    const articleData = {
      article: {
        rating: 4,
      },
    };

    const responseData = {
      status: 202,
      article: {
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
      },
    };

    fetchMock.put(`${baseurl}/api/articles/test-article-title/rate_article/`, responseData);

    const expectedActions = [{
      type: 'ARTICLE_RATED',
      payload: responseData.article,
    }];
    const slug = 'test-article-title';
    store.dispatch(rateArticle(articleData, slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates RATING_ERROR when an unauthenticated user tries to rate an article', () => {
    const articleData = {
      article: {
        rating: 4,
      },
    };

    const errorData = {
      status: 403,
      detail: 'The token is invalid',
    };

    fetchMock.put(`${baseurl}/api/articles/test-article-title/rate_article/`, errorData);

    const expectedActions = [{
      type: 'RATING_ERROR',
      payload: errorData,
    }];
    const slug = 'test-article-title';
    store.dispatch(rateArticle(articleData, slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates RATING_NOT_ALLOWED when an author tries to rate their own article', () => {
    const articleData = {
      article: {
        rating: 4,
      },
    };

    const errorData = {
      status: 400,
      detail: 'Sorry, you cannot rate your own article.',
    };

    fetchMock.put(`${baseurl}/api/articles/test-article-title/rate_article/`, errorData);

    const expectedActions = [{
      type: 'RATING_NOT_ALLOWED',
      payload: errorData,
    }];
    const slug = 'test-article-title';
    store.dispatch(rateArticle(articleData, slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
