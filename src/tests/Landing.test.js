import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import NavigationBar from '../components/navigation/NavigationBar';
import Header from '../components/Header';
import StoryHead from '../components/StoriesHead';
import { LandingPageArticles } from '../components/LandingPageArticles';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import store from '../store';

it('renders without crashing', () => {
  shallow(<LandingPage />);
});

it('Loads all other components successfully', () => {
  const wrapper = shallow(<LandingPage />);
  expect(wrapper.find(NavigationBar)).toHaveLength(1);
  expect(wrapper.find(Header)).toHaveLength(1);
  expect(wrapper.find(LoginModal)).toHaveLength(1);
  expect(wrapper.find(StoryHead)).toHaveLength(1);
  expect(wrapper.find(Footer)).toHaveLength(1);
});

it('it renders without landing page articles without crashing', () => {
  const result = {
    slug: 'yesss',
    title: 'yes',
    body: '<p>food</p>',
  };
  const fetchArticles = jest.fn();
  const props = {
    articles: {
      results: result,
    },
  };
  mount(<Router><LandingPageArticles store={store} fetchArticles={fetchArticles} {...props} /></Router>);
});
