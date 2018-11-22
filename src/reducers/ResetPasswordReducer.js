import { CHECK_EMAIL } from '../actions/types';

const initialState = {
  user: {
    email: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_EMAIL:
      return {
        ...state, user: { email: action.payload },
      };
    default:
      return state;
  }
};
