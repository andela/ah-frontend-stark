import {
  ARTICLE_RATED,
  RATING_ERROR,
  RATING_NOT_ALLOWED,
} from './types';


const baseUrl = 'https://ah-backend-stark-staging.herokuapp.com';

const myHeaders = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Token: localStorage.getItem('token'),
});

const ratingError = response => (dispatch) => {
  if (response.detail === 'Sorry, you cannot rate your own article.') {
    dispatch({
      type: RATING_NOT_ALLOWED,
      payload: response,
    });
  } else if (response.detail === 'The token is invalid') {
    dispatch({
      type: RATING_ERROR,
      payload: response,
    });
  }
};

export function rateArticle(data, slug) {
  return dispatch => fetch(
    `${baseUrl}/api/articles/${slug}/rate_article/`,
    {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(data),
    },
  )
    .then(res => res.json())
    .then((response) => {
      if (response) {
        if (response.detail) {
          dispatch(ratingError(response));
        } else {
          dispatch({
            type: ARTICLE_RATED,
            payload: response.article,
          });
        }
      }
    });
}
