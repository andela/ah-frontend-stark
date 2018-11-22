import * as actions from '../actions/types';
import ResetPassword from '../reducers/ResetPasswordReducer';
import UpdatePassword from '../reducers/updatePasswordReducer';

describe('Password reset feature', () => {
  it('should handle adding a comment', () => {
    const initialState = {
      user: {
        password: '',
      },
    };
    const details = {
      user: {
        password: '',
      },
    };
    const response = { user: { password: { user: { password: '' } } } };
    expect(UpdatePassword(initialState, {
      type: actions.UPDATE_PASSWORD,
      payload: details,
    })).toEqual(response);
  });
  it('should handle checking the user\'s email', () => {
    const initialState = {
      user: {
        password: '',
      },
    };
    const detail = {
      user: {
        email: '',
      },
    };
    const response = { user: { email: { user: { email: '' } } } };
    expect(ResetPassword(initialState, {
      type: actions.CHECK_EMAIL,
      payload: detail,
    })).toEqual(response);
  });
});
