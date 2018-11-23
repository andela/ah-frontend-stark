import { GET_ALL_USERS } from './types';


const baseurl = 'https://ah-backend-stark-staging.herokuapp.com';

const myHeaders = new Headers({
  Accept: 'application/json',
  'Content-type': 'application/json',
  Token: localStorage.getItem('token'),
});


export const fetchUsers = () => dispatch => fetch(`${baseurl}/api/profiles/`, {
  method: 'GET',
  headers: myHeaders,
})
  .then(response => response.json())
  .then((response) => {
    dispatch({
      type: GET_ALL_USERS,
      payload: response,
    });
  });
