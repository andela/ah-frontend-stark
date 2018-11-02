import { Exception } from 'handlebars';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';


const baseurl = 'https://ah-backend-stark-staging.herokuapp.com';

const loginSuccess = data => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: data,
  });
};

const loginFailure = data => (dispatch) => {
  dispatch({
    type: LOGIN_FAILURE,
    payload: data,
  });
};

const loginAction = userdata => dispatch => fetch(`${baseurl}/api/users/login/`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(userdata),
})
  .then(res => res.json())
  .then((data) => {
    if (data.errors) {
      dispatch(loginFailure(data));
      throw Exception;
    }
    dispatch(loginSuccess(data));
    const token = data.user.token;
    localStorage.setItem('token', token);
    const username = data.user.username;
    localStorage.setItem('username', username);
  });

export default loginAction;
