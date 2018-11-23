import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import { fetchAction, createAction } from '../actions/commentAction';
import { fetchComment, createCommentAction } from '../actions/repliesAction';
import * as actions from '../actions/types';

Enzyme.configure({ adapter: new Adapter() });
let store;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

describe('should test comment actions', () => {
  const mockStore = configureStore([thunk]);
  const slug = 'software-developer';
  const responseData = {
    comments: {
      comments: [{
        id: 1,
        body: 'hey there',
        timestamp: '2012-12-12',
      }],
    },
  };
  beforeEach(() => {
    store = mockStore({
      comments: {
        comments: [{}],
      },
      comment: {
        replies: [
          { reply: [{}] },
        ],
      },
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('get comments', async () => {
    const successData = {
      comments: [{
        id: 1,
        body: 'hey there',
        timestamp: '2012-12-12',
      }],
    };

    const baseUrl = 'https://ah-backend-stark-staging.herokuapp.com';
    fetchMock.get(`${baseUrl}/api/articles/software-developer/comments/`, responseData);

    const expectedActions = [{
      type: actions.GET_COMMENT,
      payload: successData,
    }];
    store.dispatch(fetchAction(slug));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('test for adding comments ', async () => {
    const data = {
      comment: {
        body: 'hey there1',
      },
    };
    const successData = {
      comments: [{
        comments: {
          comments: [{
            body: 'hey there',
            id: 1,
            timestamp: '2012-12-12',
          }],
        },
      }],
    };
    const expectedActions = [{
      type: actions.ADD_COMMENT,
      payload: successData,
    }];
    const url = 'https://ah-backend-stark-staging.herokuapp.com/api/articles/software-developer/comments/';
    fetchMock.post(url, responseData);
    store.dispatch(createAction(data, url));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
});
describe('should test replies actions', () => {
  const mockStore = configureStore([thunk]);
  const slug = 'software-developer';
  const baseUrl = 'https://ah-backend-stark-staging.herokuapp.com';
  const responseData = {
    comment: {
      replies: [
        {
          reply: [{
            body: 'some comment',
          }],
        },
      ],
    },
  };
  beforeEach(() => {
    store = mockStore({
      comment: {
        replies: [
          { reply: [{}] },
        ],
      },
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('get replies', async () => {
    const successData = { replies: [{ reply: [{ body: 'some comment' }] }] };

    fetchMock.get(`${baseUrl}/api/articles/software-developer/comments/1/`, responseData);

    const expectedActions = [{
      type: actions.GET_REPLY,
      payload: successData,
    }];
    store.dispatch(fetchComment(slug, 1));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('test for adding replies ', async () => {
    const newComment = {
      reply: {
        body: 'some reply',
      },
    };
    const successData = { comments: [{ comment: { replies: [{ reply: [{ body: 'some comment' }] }] } }] };
    const expectedActions = [{
      type: actions.ADD_REPLY,
      payload: successData,
    }];
    const url1 = `${baseUrl}/api/articles/software-developer/comments/1/`;
    fetchMock.post(url1, responseData);
    store.dispatch(createCommentAction(newComment, 'software-developer', 1));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
});
