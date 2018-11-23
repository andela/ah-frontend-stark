import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';


const initialState = {
  message: '',
  user: {},
  status: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        status: "error",
        message: action.payload.errors,
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
