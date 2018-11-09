import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import {
  fetchArticles, singleArticle, createArticles, myArticles, UpdateArticleFunc, deleteArticles,
} from '../actions/ArticleAction';

const baseurl = 'https://ah-backend-stark-staging.herokuapp.com';
let store;
const mockStore = configureStore([thunk]);

describe('article actions', () => {
  beforeEach(() => {
    store = mockStore({
      articles: [],
      article: [],
      errors: [],
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('get all articles', () => {
    const responseData = {
      payload: [],
    };
    fetchMock.get(`${baseurl}/api/articles/`, responseData);

    const expectedActions = [
      { payload: undefined, type: 'FETCH_ARTICLES' },
    ];
    store.dispatch(fetchArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('get a single articles', () => {
    const slug = 'test-two';
    const responseData = {
      payload: [],
    };
    fetchMock.get(`${baseurl}/api/articles/${slug}`, responseData);

    const expectedActions = [
      { payload: undefined, type: 'SINGLE_ARTICLE' },
    ];
    store.dispatch(singleArticle(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('get my articles', () => {
    const responseData = {
      payload: [],
    };
    fetchMock.get(`${baseurl}/api/articles/search/?author=null`, responseData);
    const expectedActions = [
      { payload: undefined, type: 'FETCH_ARTICLES' },
    ];
    store.dispatch(myArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates a new article', () => {
    const data = {
      article: {
        title: 'ttttt',
        description: 'ttttt',
        body: 'ttttt',
      },
    };

    const responseData = {
      payload: [],
    };
    fetchMock.post(`${baseurl}/api/articles/`, responseData);

    const expectedActions = [{ payload: { payload: [] }, type: 'NEW_ARTICLE' }];
    store.dispatch(createArticles(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('updating an article', () => {
    const slug = 'ttttt';
    const data = {
      article: {
        title: 'yyyyy',
        description: 'yyyyy',
        body: 'yyyyy',
      },
    };

    const responseData = {
      payload: [],
    };
    fetchMock.put(`${baseurl}/api/articles/${slug}`, responseData);

    const expectedActions = [{ payload: undefined, type: 'NEW_ARTICLE' }];
    store.dispatch(UpdateArticleFunc(slug, data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('deleting an article', () => {
    const slug = 'test';
    const responseData = {
      payload: [],
    };
    fetchMock.delete(`${baseurl}/api/articles/${slug}`, responseData);

    const expectedActions = [
      { payload: { payload: [] }, type: 'DELETE_ARTICLE' },
    ];
    store.dispatch(deleteArticles(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('updating article that doesnt exist', () => {
    const slug = 'eee';
    const data = {
      article: {
        title: 'eeee',
        description: 'eee',
        body: 'eee',
      },
    };

    const responseData = {
      status: 404,
    };
    fetchMock.put(`${baseurl}/api/articles/${slug}`, responseData);

    const expectedActions = [{ payload: undefined, type: 'NEW_ARTICLE' }];
    store.dispatch(UpdateArticleFunc(slug, data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creating article with invalid token', () => {
    const data = {
      article: {
        title: 'aaaa',
        description: 'aaa',
        body: 'aaa',
      },
    };

    const responseData = {
      status: 403,
    };
    fetchMock.post(`${baseurl}/api/articles/`, responseData);

    const expectedActions = [{ payload: { payload: [] }, type: 'NEW_ARTICLE' }];
    store.dispatch(createArticles(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('fetch article that doesnt exists', () => {
    const slug = 'test';
    const responseData = {
      status: 404,
    };
    fetchMock.get(`${baseurl}/api/articles/${slug}`, responseData);

    const expectedActions = [
      { payload: undefined, type: 'SINGLE_ARTICLE' },
    ];
    store.dispatch(singleArticle(slug)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
