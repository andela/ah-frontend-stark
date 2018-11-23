import {
  FETCH_PROFILE,
  UPDATE_PROFILE,
  FETCH_FOLLOWERS,
  FETCH_FOLLOWING,
  FOLLOW_USER,
  UNFOLLOW_USER,
} from '../actions/types';

const initialState = {
  followers: [],
  following: [],
  followMessage: '',
  alreadyFollowing: false,
  followersCount: 0,
};

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
    case FETCH_FOLLOWERS:
      return {
        ...state,
        followers: action.payload.followers,
        alreadyFollowing: action.payload.alreadyFollowing,
        followersCount: action.payload.followersCount,
      };
    case FETCH_FOLLOWING:
      return {
        ...state,
        following: action.payload.following,
        followingCount: action.payload.followingCount,
      };
    case FOLLOW_USER:
      return {
        ...state,
        followMessage: action.payload.message,
        alreadyFollowing: true,
        followersCount: state.followersCount + 1,
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        followMessage: action.payload.message,
        alreadyFollowing: false,
        followersCount: state.followersCount - 1,
      };
    default:
      return state;
  }
}

export default profileReducer;
