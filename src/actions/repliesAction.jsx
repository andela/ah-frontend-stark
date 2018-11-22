/* eslint-disable import/prefer-default-export,no-undef */
import { ADD_REPLY, GET_REPLY } from './types';

const baseUrl = 'https://ah-backend-stark-staging.herokuapp.com/';
const tokenValue = localStorage.getItem('token');
export const fetchComment = (slug, id) => (dispatch) => {
  fetch(`${baseUrl}api/articles/${slug}/comments/${id}/`)
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: GET_REPLY,
        payload: data.comment,
      });
    }).catch(error => console.error('Fetch Error =\n', error));
};

export const createCommentAction = (data, commentSlug, id) => (dispatch) => {
  fetch(`${baseUrl}api/articles/${commentSlug}/comments/${id}/`, {
    method: 'POST',
    headers: {
      token: tokenValue,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then((comment) => {
      dispatch({
        type: ADD_REPLY,
        payload: { comments: [comment] },

      });
    });
};
