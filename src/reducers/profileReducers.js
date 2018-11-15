import { FETCH_PROFILE, UPDATE_PROFILE } from '../actions/types';

const initialState = {};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...action.payload,
        ...state,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,   
      };
    default:
      return state;
  }
}

export default profileReducer;
