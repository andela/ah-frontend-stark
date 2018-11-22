import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import { checkEmail } from '../actions/RestPasswordAction';
import { passwordUpdater } from '../actions/updatePasswordAction';
import * as actions from '../actions/types';

Enzyme.configure({ adapter: new Adapter() });
let store;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

describe('should test reset password actions', () => {
  const mockStore = configureStore([thunk]);
  beforeEach(() => {
    store = mockStore({
      user: {
        email: '',
      },
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('checks the users email if they exist in the database', async () => {
    const userData = {
      user: {
        email: 'jonathanaurugai@gmail.com',
      },
    };

    const responseData = {
      user: {
        email: 'jonathanaurugai@gmail.com',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.'
                + 'eyJpZCI6MSwidXNlcm5hbWUiOiJmbGludGtpbmciLCJ'
                + 'leHAiOjE1NDI3MDUyODh9.vi-miVzQKXTRWWGh_lTGKI2F5-wt-pE9EkY9EhDjApI',
        message: 'A link has been sent to your email',
      },
    };

    const successData = {
      user: {
        email: 'jonathanaurugai@gmail.com',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.'
                      + 'eyJpZCI6MSwidXNlcm5hbWUiOiJmbGludGtpbmciLCJ'
                      + 'leHAiOjE1NDI3MDUyODh9.vi-miVzQKXTRWWGh_lTGKI2F5-wt-pE9EkY9EhDjApI',
        message: 'A link has been sent to your email',
      },
    };

    fetchMock.post('https://ah-backend-stark-staging.herokuapp.com/api/password-reset/', responseData);

    const expectedActions = [{
      type: actions.CHECK_EMAIL,
      payload: successData,
    }];
    store.dispatch(checkEmail(userData));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
});
describe('should test update password actions', () => {
  const mockStore = configureStore([thunk]);
  beforeEach(() => {
    store = mockStore({
      user: {
        email: '',
      },
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('checks the users email if they exist in the database', async () => {
    const userData = {
      user: {
        password: 'Root1234',
      },
    };

    const responseData = {
      user: {
        password: 'Root1234',
      },
    };

    const successData = {
      user: {
        password: 'Root1234',
      },
    };

    fetchMock.put('https://ah-backend-stark-staging.herokuapp.com/api/password/reset/done/', responseData);

    const expectedActions = [{
      type: actions.UPDATE_PASSWORD,
      payload: successData,
    }];
    store.dispatch(passwordUpdater(userData));
    await flushAllPromises();
    expect(store.getActions()).toEqual(expectedActions);
  });
});
