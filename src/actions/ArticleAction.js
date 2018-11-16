import {
  FETCH_ARTICLES,
  NEW_ARTICLE,
  SINGLE_ARTICLE,
  ERROR_ARTICLE,
  ARTICLE_LIKED,
  ARTICLE_DISLIKED,
} from './ActionTypes';


const baseurl = 'https://ah-backend-stark-staging.herokuapp.com';

export const fetchArticles = () => (dispatch) => {
  fetch(`${baseurl}/api/articles/`, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_ARTICLES,
      payload: data.results,
    }));
};
export const singleArticle = slug => (dispatch) => {
  fetch(`${baseurl}/api/articles/${slug}`)
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
  fetch(`${baseurl}/api/articles/`, {
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

const PostNotPut = (articleData, slug) => fetch(
  `${baseurl}/api/articles/${slug}/like/`,
  {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(articleData),
  },
)
  .then(res => res.json())
  .then(data => data);
 
export function likeArticle(articleData, slug) {
  return dispatch => fetch(
    `${baseurl}/api/articles/${slug}/like/`,
    {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(articleData),
    },
  )
    .then(res => res.json())
    .then((data) => {
      if (data.errors) {
        const responseError = data.errors[0];
        if (responseError === 'cannot updatelike or dislike article') {
          return PostNotPut(articleData, slug);
        }
      } else {
        return data;
      }
    })
    .then(data => dispatch({
      type: ARTICLE_LIKED,
      payload: data,
    }));
}
 
export function dislikeArticle(articleData, slug) {
  return dispatch => fetch(
    `${baseurl}/api/articles/${slug}/like/`,
    {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(articleData),
    },
  )
    .then(res => res.json())
    .then((data) => {
      if (data.errors) {
        const responseError = data.errors[0];
        if (responseError === 'cannot updatelike or dislike article') {
          return PostNotPut(articleData, slug);
        }
      } else {
        return data;
      }
    })
    .then((data) => {
      dispatch({
        type: ARTICLE_DISLIKED,
        payload: data,
      });
    });
}
