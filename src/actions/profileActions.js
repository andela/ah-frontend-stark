import { FETCH_PROFILE, UPDATE_PROFILE } from "./types";

let token = localStorage.getItem('token');
let username = localStorage.getItem('username')+"/";

let appHeaders = new Headers({
'Content-Type':'application/json;',
'Token': token,
});

const baseurl = 'https://ah-backend-stark-staging.herokuapp.com/api/profile/';
const url = baseurl.concat(username);

export const fetchProfile = () => dispatch => {
  fetch(url, {headers: appHeaders})
  .then(response=> response.json())
    .then(response => {
      
      dispatch({
        type: FETCH_PROFILE,
        payload: response
      })
    })
};

export const updateProfile = (data) => dispatch => {
  console.log('my response', data)
  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: appHeaders,

  })
  .then(response => response.json())
    .then(response => {
      localStorage.setItem('username', response['profile']['username'])
      dispatch({
        type: UPDATE_PROFILE,
        payload: response
      })
    })
};