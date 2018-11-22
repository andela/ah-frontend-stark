import { mount, shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ResetPassword } from '../views/ResetPassword';
import { UpdatePassword } from '../views/updatePassword';
import SuccessPage from '../views/successPage';


const store = configureStore([thunk])({
  user: {
    email: '',
  },
});

let wrapper;

describe('Reset password Component', () => {
  const onSubmitHandler = jest.fn();
  const createSpy = toSpy => jest.spyOn(wrapper.instance(), toSpy);

  Object.defineProperty(window.location, 'reload', {
    configurable: true,
  });

  window.location.reload = jest.fn();
  const nextProps = {
    reset: {
      email: {
        user: {
          email: 'jonathanaurugai@gmail.com',
          detail: 'Not found.',
        },
      },
    },
  };
  const nextProps1 = {
    reset: {
      email: {
        user: {
          email: 'jonathanaurugai@gmail.com',
          detail: ' found.',
        },
      },
    },
  };
  const props = {
    history: { push: jest.fn() },
  };
  beforeEach(() => {
    wrapper = mount(
      <ResetPassword checkEmail={jest.fn} props={props} />,
    );
  });

  it('should render ResetPassword comment', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should simulate a click', () => {
    wrapper.find('.btn').simulate('submit');
    expect(onSubmitHandler).toBeCalledTimes(0);
  });

  it('should call handleChange on form fill', () => {
    const spy = createSpy('onChangeHandler');
    wrapper.instance().forceUpdate();
    wrapper.find('input[name="email"]').simulate('change', { target: { value: 'jonathanaurugai@gmail.com' } });
    expect(spy).toBeCalled();
  });
});

describe('update the password component', () => {
  const onSubmitHandler = jest.fn();
  const createSpy = toSpy => jest.spyOn(wrapper.instance(), toSpy);

  Object.defineProperty(window.location, 'reload', {
    configurable: true,
  });

  window.location.reload = jest.fn();
  const nextProps = {
    reset: {
      email: {
        user: {
          email: 'jonathanaurugai@gmail.com',
          detail: 'Not found.',
        },
      },
    },
  };
  const nextProps1 = {
    reset: {
      email: {
        user: {
          email: 'jonathanaurugai@gmail.com',
          detail: ' found.',
        },
      },
    },
  };
  const props = {
    history: { push: jest.fn() },
  };
  beforeEach(() => {
    wrapper = mount(
      <UpdatePassword passwordUpdater={jest.fn} password_update={{}} />,
    );
  });
  it('should test if the componet renders', () => {
    console.log(wrapper);
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate a click', () => {
    wrapper.find('.btn').simulate('submit');
    expect(onSubmitHandler).toBeCalledTimes(0);
  });

  it('should call handleChange on form fill', () => {
    const spy = createSpy('onChangeHandler');
    wrapper.instance().forceUpdate();
    wrapper.find('input[name="Password"]').simulate('change', { target: { value: 'jonathanaurugai@gmail.com' } });
    expect(spy).toBeCalled();
  });
});

describe('success page', () => {
  const page = shallow(<SuccessPage />);
  it('should render success page without crashing', () => {
    expect(page).toHaveLength(1);
  });
});
