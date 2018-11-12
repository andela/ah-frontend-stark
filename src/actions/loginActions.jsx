import { Exception } from 'handlebars';
// import { dispatch } from 'rxjs/internal/observable/range';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

const baseurl = 'http://127.0.0.1:8000';

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = data => ({
  type: LOGIN_FAILURE,
  payload: data,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

// function rejected() {
//   console.log('REJECTED');
// }

function loginAction(userdata) {
  return (dispatch) => {
    // console.log(userdata, 'data');
    dispatch(loginRequest());
    return fetch(`${baseurl}/api/users/login/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userdata),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response, 'response');
        console.log('DATA =========', response);
        if (response.errors) {
          dispatch(loginFailure(response));
          return { success: false };
        }
      // return response
      dispatch(loginSuccess(response));
      // const { token } = response.user.token;
      // localStorage.setItem('token', token);
      // const { username } = response.user.username;
      // localStorage.setItem('username', username);

      return { success: true };
    })
    
  };
}

export { loginAction };

// .then(res => res.json())
//       .then((data) => {
//         console.log('DATA======> ', data);
//         if (data.errors) {
//           dispatch(loginFailure(data));
//           // Promise.reject(new Error('fail')).then(rejected);
//           throw Exception;
//         } else if (data.user) {
//           dispatch(loginSuccess(data));
//           const token = data.user.token;
//           localStorage.setItem('token', token);
//           const username = data.user.username;
//           localStorage.setItem('username', username);
//         }
//       });
