import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/types';

const initialState = {
  users: [],
  user: {},
  IsRegistered: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        IsRegistered: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        IsRegistered: false,
      };
    default:
      return state;
  }
}
