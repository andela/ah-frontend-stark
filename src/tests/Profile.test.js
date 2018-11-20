import React from 'react';
import { shallow, mount } from 'enzyme';

import profileReducer from '../reducers/profileReducers';
import { FETCH_PROFILE, UPDATE_PROFILE } from '../actions/types';
import ArticleCard from '../components/ArticleCard';
import ProfilePic from '../components/profilePic';
import { ProfilePage } from '../components/userProfile';
import ViewProfile from '../views/profile';
import EditProfile from '../views/editProfile';

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
  mount(<ProfilePic />);
});

it('ArticleCard renders without fail', () => {
  mount(<ArticleCard />);
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

it('renders ProfileView without fail', () => {
  shallow(<ViewProfile />);
});

it('renders EditProfileView without fail', () => {
  shallow(<EditProfile />);
});