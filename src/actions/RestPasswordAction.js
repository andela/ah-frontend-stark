import { CHECK_EMAIL } from './types';

export const checkEmail = data => (dispatch) => {
  fetch('https://ah-backend-stark-staging.herokuapp.com/api/password-reset/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then((response) => {
      localStorage.setItem('update_Token', response.user.token);
      dispatch({
        type: CHECK_EMAIL,
        payload: response,

      });
    }).catch(error => console.error('Fetch Error =\n', error));
};
