import { UPDATE_PASSWORD } from './types';

export const passwordUpdater = data => (dispatch) => {
  const baseUrl = 'https://ah-backend-stark-staging.herokuapp.com/';
  fetch(`${baseUrl}api/password/reset/done/`, {
    method: 'PUT',
    headers: {
      Token: localStorage.getItem('update_Token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then((response) => {
      dispatch({
        type: UPDATE_PASSWORD,
        payload: response,

      });
    }).catch(error => console.error('Fetch Error =\n', error));
};
