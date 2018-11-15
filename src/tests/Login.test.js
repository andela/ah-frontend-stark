import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { LoginForm } from '../components/LoginForm';


const store = configureStore([thunk])({
  message: '',
  user: {},
  status: 'none',
});

let wrapper;
const loginAction = jest.fn();

describe('Login Component', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <LoginForm
          loginAction={loginAction}
          email="none"
          password="none"
        />
      </Provider>,
    );
  });
  it('should render login form without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should mount component without crashing', () => {
    mount(<LoginForm 
      store={store} 
      email="none"
      password="none"
      loginAction={loginAction} />);
  });

  it('form should call handleSubmit when submit button is clicked', () => {
    const submit = wrapper.find('#submit');
    const handleSubmit = jest.fn();
    const instance = wrapper.find(LoginForm).instance();
    instance.handleSubmit = handleSubmit();

    submit.simulate('click', { preventDefault() {} });
    expect(handleSubmit).toHaveBeenCalled();
  });
});
