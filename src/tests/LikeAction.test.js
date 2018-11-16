import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import {
    likeArticle,
    dislikeArticle
} from '../actions/ArticleAction';
import {
  ARTICLE_LIKED,
  ARTICLE_DISLIKED,
} from '../actions/ActionTypes';
 
 
const baseurl = 'https://ah-backend-stark-staging.herokuapp.com';
let store;
 
const mockStore = configureStore([thunk]);
 
describe('async like actions', () => {
  beforeEach(() => {
    store = mockStore({
      articles: [],
      article: [],
      like: [],
      errors: [],
    });
  });
 
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
 
  it('creates ARTICLE_LIKED when a user likes an article', () => {
    const articleData = {
      like: {
        action: 1,
      },
    };
 
    const responseData = {
      status: 400,
      errors: ['cannot updatelike or dislike article'],
    };
    const successData = {
      status: {
        username: 'testuser', action: true, article: 'testarticle',
      },
    };
    fetchMock.put(`${baseurl}/api/articles/testarticle/like/`, responseData);
 
    const expectedActions = [{
      type: ARTICLE_LIKED,
      payload: successData,
    }];
    const slug = 'testarticle';
    store.dispatch(likeArticle(articleData, slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
 
  it('creates ARTICLE_DISLIKED when a user likes an article', () => {
    const articleData = {
      like: {
        action: 1,
      },
    };
 
    const responseData = {
      status: 400,
      errors: ['cannot updatelike or dislike article'],
    };
    const successData = {
      status: {
        username: 'testuser', action: false, article: 'testarticle',
      },
    };
    fetchMock.put(`${baseurl}/api/articles/testarticle/like/`, responseData);
 
    const expectedActions = [{
      type: ARTICLE_DISLIKED,
      payload: successData,
    }];
    const slug = 'testarticle';
    store.dispatch(dislikeArticle(articleData, slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});