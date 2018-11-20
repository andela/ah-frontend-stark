import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Signup from '../components/SignupForm';
import store from '../store';


Enzyme.configure({ adapter: new Adapter() });

describe('article component', () => {
  const mockStore = configureMockStore();
  beforeEach(() => {
    mockStore({});
  });
  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value,
    },
  });
  it('should render signup form without crashing', () => {
   const component = mount(<Router><Signup store={store} /></Router>);
  component.find('#signup-btn').simulate('submit', getEvent());
  });
});
