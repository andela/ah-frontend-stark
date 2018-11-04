import React from 'react';
import { shallow } from 'enzyme';
import SignupPage from '../views/signup';
import SignupForm from '../components/SignupForm';
import userReducer from '../reducers/userReducer';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/types';

const initialState = {
  users: [],
  user: {},
  IsRegistered: false,
};

it('signup page renders without crashing', () => {
  const wrapper = shallow(<SignupPage />);
  expect(wrapper.find(SignupForm)).toHaveLength(1);
});

describe('User Reducer', () => {
  test('returns the default state when given invalid data', () => {
    const action = { type: 'invalid_type' };
    expect(userReducer(undefined, action)).toEqual(initialState);
  });

  test('it returns correct state after successful registration', () => {
    const testData = { user: { username: 'james', Token: 'xYzZq' } };
    const action = { type: SIGNUP_SUCCESS, payload: testData };
    const newstate = {
      IsRegistered: true,
      user: { user: { Token: 'xYzZq', username: 'james' } },
      users: [],
    };
    expect(userReducer(undefined, action)).toEqual(newstate);
  });
});
