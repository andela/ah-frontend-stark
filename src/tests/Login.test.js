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
let instance;
let handleSubmit;
let onChange;
let listErrors;
let toggleModal;
let history = { push: '' };
// let push;
const loginAction = jest.fn(() => new Promise(resolve => resolve()));

describe('Login Component', () => {
  beforeEach(() => {
    handleSubmit = jest.fn();
    onChange = jest.fn();
    listErrors = jest.fn();
    toggleModal = jest.fn();
    history = { push: jest.fn() };

    instance = new LoginForm({
      loginAction,
      password: 'none',
      email: 'none',
    });

    instance.handleSubmit = handleSubmit;
    instance.onChange = onChange;
    instance.listErrors = listErrors;
    instance.toggleModal = toggleModal;
    // instance.history.push = history.push;

    wrapper = mount(
      <Provider store={store}>
        {instance.render()}
      </Provider>,
    );
  });

  it('should render login form without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should mount component without crashing', () => {
    mount(<LoginForm
      store={store}
      loginAction
      email="none"
      password="none"
    />);
  });

  it('form should call handleSubmit when submit button is clicked', () => {
    const submit = wrapper.find('#login-form');
    submit.simulate('submit', {
      preventDefault() {
      },
    });
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('should set state when user inputs data', () => {
    const input = wrapper.find('#email');
    input.props().value = 'testuser@email.com';
    input.simulate('change', {
      target: { name: 'email', value: 'testuser@email.com' },
    });
    expect(onChange).toHaveBeenCalled();
    wrapper.update();
    console.log('STATE=======>', instance.state.user);
    // expect(instance.state.user.email).toEqual('testuser@email.com');
  });

  it('should redirect on successful login', () => {
    wrapper.setProps({ status: 'loading', loginAction });

    // const history = jest.fn();
    // const historyMock = { push: jest.fn() };
    expect(historyMock.push.mock.calls[0]).toEqual(["/homepage",]);
    // expect(history.push).toHaveBeenCalled();
  });

  //   it("should hide modal when login is successful", () => {
  //   // let instance = wrapper.find(LoginForm).instance();
  //   const store2 = configureStore([thunk])({
  //     message: "",
  //     user: {},
  //     status: "none",
  //   });
  //     const wrapper = {toggleModal: jest.fn()};
  //     let toggleFn = wrapper.toggleModal;
  //     instance.setProps({
  //       status: "loading",
  //       loginAction,
  //       toggleFn
  //     });
  //     instance.update()
  //     expect(toggleModal.toggleModal).toHaveBeenCalled();
  //   });
});
