import React from 'react';
import { mount } from 'enzyme';
import LandingPage from '../components/LandingPage';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import StoryHead from '../components/StoriesHead';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

it('renders without crashing', () => {
  mount(<LandingPage />);
});

it('Loads all other components successfully', () => {
  const wrapper = mount(<LandingPage />);
  expect(wrapper.find(NavBar)).toHaveLength(1);
  expect(wrapper.find(Header)).toHaveLength(1);
  expect(wrapper.find(StoryHead)).toHaveLength(1);
  expect(wrapper.find(Articles)).toHaveLength(1);
  expect(wrapper.find(Footer)).toHaveLength(1);
});
