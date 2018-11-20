import profileReducer from '../reducers/profileReducers';
import * as types from '../actions/ActionTypes';

const initialState = {
  followers: [],
  following: [],
  followMessage: '',
  alreadyFollowing: false,
  followersCount: 0,
};

const modifiedState = {
  followers: [],
  following: [],
  followMessage: '',
  alreadyFollowing: true,
  followersCount: 1,
};


const followData = { message: "You're now following testuser! You will receive notifications about their posts" };

const unfollowData = { message: 'You have unfollowed testuser' };

describe('Profile reducer: Follow users', () => {
  it('should return the initial state', () => {
    expect(profileReducer(initialState, {})).toEqual(initialState);
  });


  it('should handle FOLLOW_USER', () => {
    const state = {
      followers: [],
      following: [],
      followMessage: '',
      alreadyFollowing: false,
      followersCount: 0,
    };
    expect(profileReducer(initialState, {
      type: types.FOLLOW_USER,
      payload: followData,
    })).toEqual(
      state,
    );
  });

  it('should handle UNFOLLOW_USER', () => {
    const state = {
      followers: [],
      following: [],
      followMessage: '',
      alreadyFollowing: true,
      followersCount: 1,
    };
    expect(profileReducer(modifiedState, {
      type: types.UNFOLLOW_USER,
      payload: unfollowData,
    })).toEqual(
      state,
    );
  });

  it('should handle FETCH_FOLLOWERS', () => {
    const state = {
      followers: [],
      following: [],
      followMessage: '',
      alreadyFollowing: true,
      followersCount: 1,
    };
    expect(profileReducer(modifiedState, {
      type: types.FETCH_FOLLOWERS,
      payload: unfollowData,
    })).toEqual(
      state,
    );
  });
  
  it('should handle FETCH_FOLLOWING', () => {
    const state = {
      followers: [],
      following: [],
      followMessage: '',
      alreadyFollowing: true,
      followersCount: 1,
    };
    expect(profileReducer(modifiedState, {
      type: types.FETCH_FOLLOWING,
      payload: unfollowData,
    })).toEqual(
      state,
    );
  });
});
