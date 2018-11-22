/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { GET_COMMENT, ADD_COMMENT } from './types';

const baseUrl = 'https://ah-backend-stark-staging.herokuapp.com';
const tokenValue = localStorage.getItem('token');
export const fetchAction = slug => (dispatch) => {
  fetch(`${baseUrl}/api/articles/${slug}/comments/`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: GET_COMMENT,
        payload: data.comments,
      });
    }).catch(error => console.error('Fetch Error =\n', error));
};
export const createAction = (data, url) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: {
      Token: tokenValue,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then((comment) => {
      dispatch({
        type: ADD_COMMENT,
        payload: { comments: [comment] },

      });
    }).catch(error => console.error('Fetch Error =\n', error));
};
