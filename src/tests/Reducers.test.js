import loginReducer from '../reducers/loginReducer';
import * as types from '../actions/types';

const initialState = {
  message: '',
  user: {},
  status: 'none',
};

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


describe('Login reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(initialState, {})).toEqual(initialState);
 });

  it('should handle LOGIN_SUCCESS', () => {
    expect(loginReducer(initialState, {
      type: types.LOGIN_SUCCESS,
      payload: responsedata_success,
    })).toEqual(
      {
        message: responsedata_success,
        status: 'loading',
        user: {},
      },
    );
  });

  it('should handle LOGIN_FAILURE', () => {
    expect(loginReducer(initialState, {
      type: types.LOGIN_FAILURE,
      payload: responsedata_failure,
    })).toEqual(
      {
        message: responsedata_failure.errors,
        status: 'error',
        user: {},
      },
    );
  });
});
