import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';


const initialState = {
  message: '',
  user: {},
  status: "none",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        message: action.payload.errors,
        status: "error",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload,
        status: "loading",
      };

    default:
      return state;
  }
}
