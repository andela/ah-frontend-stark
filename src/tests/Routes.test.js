import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import HomePage from '../views/home';
import ErrorNotFound from '../views/notfound';


it('checks that an invalid path redirects to 404 page', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={['/random']}>
      <ErrorNotFound />
    </MemoryRouter>,
  );
  expect(wrapper.find(HomePage)).toHaveLength(0);
  expect(wrapper.find(ErrorNotFound)).toHaveLength(1);
});

it('home page loads successfully', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>,
  );
  expect(wrapper.find(HomePage)).toHaveLength(1);
  expect(wrapper.find(ErrorNotFound)).toHaveLength(0);
});
