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

