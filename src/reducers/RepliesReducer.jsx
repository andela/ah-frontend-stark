import { GET_REPLY } from '../actions/types';

const initialState = {
  replies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REPLY:
      return {
        ...state, replies: [...state.replies, action.payload],
      };
    default:
      return state;
  }
};
