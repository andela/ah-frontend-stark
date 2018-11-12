import React from 'react';
import { shallow, mount } from 'enzyme';

import profileReducer from '../reducers/profileReducers';
import { FETCH_PROFILE, UPDATE_PROFILE } from '../actions/types';
import ArticleCard from '../components/ArticleCard';
import ProfilePic from '../components/profilePic';
import { ProfilePage } from '../components/userProfile';

it('profile reducer returns valid user profile data', () => {
  profileReducer(
    {},
    {
      type: FETCH_PROFILE
    },
  );
});

it('profile reducer returns data on editing a user profile data', () => {
  profileReducer(
    {},
    {
      type: UPDATE_PROFILE
    },
  );
});

it('ProfilePic renders without fail', () => {
  let component = mount(<ProfilePic />);
});

it('ArticleCard renders without fail', () => {
  let component = mount(<ArticleCard />);
});

describe('profile page', () => {
  let component;

  beforeEach(() => {
    const fetchProfile = jest.fn();
    component = shallow(<ProfilePage fetchProfile={fetchProfile} />);
  });
  it('renders profile page', () => {
    component.contains(<ProfilePic />);
  });
});
