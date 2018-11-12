import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import * as actions from '../actions/loginActions';
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from '../actions/types';


const responsedata_success = {
  user: {
    email: 'testuser@email.com',
    username: 'testuser',
    token: 'user-token',
  },
};
const responsedata_failure = {
  errors: {
    error: ['A user with this email and password was not found.'],
  },
};
const baseurl = 'http://127.0.0.1:8000';
const userdata = {
    user: {
      email: 'testuser@email.com',
      password: 'Testuser1',
    },
  };


describe('sync login actions', () => {
  it('has a LOGIN_SUCCESS action', () => {
    const expectedAction = {
      type: LOGIN_SUCCESS,
      payload: responsedata_success,
    };
    expect(actions.loginSuccess(responsedata_success)).toEqual(expectedAction);
  });

  it('has a LOGIN_FAILURE action', () => {
    const expectedAction = {
      type: LOGIN_FAILURE,
      payload: responsedata_failure,
    };
    expect(actions.loginFailure(responsedata_failure)).toEqual(expectedAction);
  });
});

let store;

describe('async login actions', () => {
  const mockStore = configureStore([thunk]);

  beforeEach(() => {
    store = mockStore({
      message: '',
      user: {},
      status: 'none',
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates LOGIN_FAILURE when login is unsuccessful', () => {

    let data = {
      status: 404,
      errors: {
        error: ['A user with this email and password was not found.'],
      },
    };
    fetchMock.post(`${baseurl}/api/users/login/`, data);
    const expectedActions = [
      {
        type: LOGIN_REQUEST,
      },
      {
        type: LOGIN_FAILURE,
        payload: data,
      },
    ];
    return store.dispatch(actions.loginAction(userdata)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN_SUCCESSFUL when login is successful', () => {

    let data = {
      status: 200,
      user: {
        token: 'user-token',
        username: 'testuser',
        email: 'testuser@email.com',
      },
    };

    fetchMock.post(`${baseurl}/api/users/login/`, data);
    const expectedActions = [
      {
        type: LOGIN_REQUEST,
      },
      {
        type: LOGIN_SUCCESS,
        payload: data,
      },
    ];
    return store.dispatch(actions.loginAction(userdata)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  
});
