import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_ALL_USERS,
} from '../actions/types';
 
const initialState = {
  users: [],
  userList: [],
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
    case GET_ALL_USERS:
      return {
        ...state,
        userList: action.payload.profile.Authors,
      };
    default:
      return state;
  }
}