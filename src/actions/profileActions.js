import {
  FETCH_PROFILE,
  UPDATE_PROFILE,
  FETCH_FOLLOWERS,
  FETCH_FOLLOWING,
  FOLLOW_USER,
  UNFOLLOW_USER,
} from './types';

const token = localStorage.getItem('token');

const appHeaders = new Headers({
  'Content-Type': 'application/json;',
  Token: token,
});

const baseurl = 'https://ah-backend-stark-staging.herokuapp.com';

export const fetchProfile = username => (dispatch) => {
  fetch(`${baseurl}/api/profile/${username}/`, { headers: appHeaders })
    .then((response) => {
      if (response.status === 404) {
        window.location = '/404';
      } else {
        return response.json();
      }
    })
    .then((response) => {
      dispatch({
        type: FETCH_PROFILE,
        payload: response,
      });
    });
};

export const updateProfile = (data, currentUser) => (dispatch) => {
  fetch(`${baseurl}/api/profile/${currentUser}/`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: appHeaders,
  })
    .then(response => response.json())
    .then((response) => {
      localStorage.setItem('username', response.profile.username);
      dispatch({
        type: UPDATE_PROFILE,
        payload: response,
      });
    });
};

export const getFollowers = (username, followList) => (dispatch) => {
  fetch(`${baseurl}/api/profile/${username}/${followList}/`, { headers: appHeaders })
    .then((response) => {
      if (response.status === 404) {
        window.location = '/404';
      } else {
        return response.json();
      }
    })
    .then((response) => {
      if (response.followers) {
        const followers = response.followers;
        const currentUser = localStorage.getItem('username');
        let alreadyFollowing = false;
        let followersCount = 0;
        if (typeof followers === 'object') {
          followersCount = followers.length;
          for (let i = 0; i < followersCount; i++) {
            if (followers[i].username === currentUser) {
              alreadyFollowing = true;
            }
          }
        }
        response = {
          followers: response.followers,
          alreadyFollowing,
          followersCount,
        };
        dispatch({
          type: FETCH_FOLLOWERS,
          payload: response,
        });
      } else if (response.following) {
        let followingCount = 0;
        const following = response.following;
        if (typeof following === 'object') {
          followingCount = following.length;
        }
        response = {
          following: response.following,
          followingCount,
        };
        dispatch({
          type: FETCH_FOLLOWING,
          payload: response,
        });
      }
    });
};

export const follow = username => (dispatch) => {
  fetch(`${baseurl}/api/profile/${username}/follow/`, {
    method: 'POST',
    headers: appHeaders,
  })
    .then((response) => {
      if (response.status === 404) {
        window.location = '/404';
      } else {
        return response.json();
      }
    })
    .then((response) => {
      dispatch({
        type: FOLLOW_USER,
        payload: response,
      });
    });
};

export const unfollow = username => (dispatch) => {
  fetch(`${baseurl}/api/profile/${username}/unfollow/`, {
    method: 'DELETE',
    headers: appHeaders,
  })
    .then((response) => {
      if (response.status === 404) {
        window.location = '/404';
      } else {
        return response.json();
      }
    })
    .then((response) => {
      dispatch({
        type: UNFOLLOW_USER,
        payload: response,
      });
    });
};
