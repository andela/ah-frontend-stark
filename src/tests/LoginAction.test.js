import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import * as actions from '../actions/loginActions';

 
const baseurl = 'https://ah-backend-stark-staging.herokuapp.com';
const userdata = {
  user: {
    email: 'testuser@email.com',
    password: 'Testuser1',
  },
};
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
    const data = {
      status: 404,
      errors: {
        error: ['A user with this email and password was not found.'],
      },
    };
    fetchMock.post(`${baseurl}/api/users/login/`, data);
    const expectedActions = [
      {
        type: 'LOGIN_FAILURE',
        payload: data,
      },
    ];
    return store.dispatch(actions.loginAction(userdata)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN_SUCCESSFUL when login is successful', () => {
    const data = {
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
        type: 'LOGIN_SUCCESS',
        payload: data,
      },
    ];
    
    return store.dispatch(actions.loginAction(userdata)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
