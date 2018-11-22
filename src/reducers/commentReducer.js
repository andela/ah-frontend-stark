import { GET_COMMENT, ADD_COMMENT } from '../actions/types';

const initialState = {
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT:
      return {
        ...state,
        comments: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };

    default:
      return state;
  }
};
