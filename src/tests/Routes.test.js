import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import HomePage from '../views/home';
import LoginPage from '../views/login';
import ErrorNotFound from '../views/notfound';


it('checks that an invalid path redirects to 404 page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/random']}>
      <ErrorNotFound />
    </MemoryRouter>,
  );
  expect(wrapper.find(HomePage)).toHaveLength(0);
  expect(wrapper.find(ErrorNotFound)).toHaveLength(1);
});

it('home page loads successfully', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>,
  );
  expect(wrapper.find(HomePage)).toHaveLength(1);
  expect(wrapper.find(ErrorNotFound)).toHaveLength(0);
});

it('login page loads successfully', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/login']}>
      <LoginPage />
    </MemoryRouter>,
  );
  expect(wrapper.find(LoginPage)).toHaveLength(1);
  expect(wrapper.find(ErrorNotFound)).toHaveLength(0);
});
