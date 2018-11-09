import {
  FETCH_ARTICLES, NEW_ARTICLE, SINGLE_ARTICLE, ERROR_ARTICLE,
} from './ActionTypes';

export const fetchArticles = () => (dispatch) => {
  fetch('https://ah-backend-stark-staging.herokuapp.com/api/articles/', {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_ARTICLES,
      payload: data.results,
    }));
};
export const singleArticle = slug => (dispatch) => {
  fetch(`https://ah-backend-stark-staging.herokuapp.com/api/articles/${slug}`)
    .then((res) => {
      if (res.status === 404) {
        window.location = '/404';
      } else {
        return res.json();
      }
    })
    .then(data => dispatch({
      type: SINGLE_ARTICLE,
      payload: data.article,
    }));
};
const myHeaders = new Headers({
  Accept: 'application/json',
  'Content-type': 'application/json',
  Token: localStorage.getItem('token'),

});

export const createArticles = articleData => (dispatch) => {
  fetch('https://ah-backend-stark-staging.herokuapp.com/api/articles/', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(articleData),

  })
    .then((res) => {
      if (res.status === 403) {
        window.location = '/';
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data.errors) {
        dispatch({
          type: ERROR_ARTICLE,
          payload: data.errors,
        });
      } else {
        dispatch({
          type: NEW_ARTICLE,
          payload: data,
        });
      }
    });
};
