import React from 'react';
import { mount } from 'enzyme';
import SocialAuth from '../components/SocialAuth';


it('renders without crashing', () => {
  mount(<SocialAuth />);
});
