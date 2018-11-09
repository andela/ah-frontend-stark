import { UPDATE_PASSWORD } from '../actions/types';

const initialState = {
  user: {
    password: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return {
        ...state, user: { password: action.payload },
      };
    default:
      return state;
  }
};
