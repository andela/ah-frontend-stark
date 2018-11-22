import { toast } from 'react-toastify';
import {
  FETCH_ARTICLES,
  NEW_ARTICLE,
  SINGLE_ARTICLE,
  ERROR_ARTICLE,
  ARTICLE_LIKED,
  ARTICLE_DISLIKED,
  DELETE_ARTICLE,
} from './ActionTypes';
import getErrorMessages from '../utils/ArticleValidation';


const baseurl = 'https://ah-backend-stark-staging.herokuapp.com';
export const fetchArticles = (url = 'https://ah-backend-stark-staging.herokuapp.com/api/articles/') => dispatch => fetch(`${url}`, {
  method: 'GET',
})
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_ARTICLES,
    payload: data,
  }));

export const singleArticle = slug => dispatch => fetch(`${baseurl}/api/articles/${slug}`)
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
const myHeaders = new Headers({
  Accept: 'application/json',
  'Content-type': 'application/json',
  Token: localStorage.getItem('token'),
});

export const createArticles = articleData => dispatch => fetch(`${baseurl}/api/articles/`, {
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
      if (data.errors) {
        let errors = null;
        errors = getErrorMessages(data.errors.title,
          data.errors.body,
          data.errors.description,
          data.errors);
        toast.error(errors, { autoClose: 4500, hideProgressBar: true });
        errors = null;
      }
    } else {
      dispatch({
        type: NEW_ARTICLE,
        payload: data,
      });
    }
  });

export const UpdateArticleFunc = (slug, newData) => dispatch => fetch(`https://ah-backend-stark-staging.herokuapp.com/api/articles/${slug}`, {
  method: 'PUT',
  headers: myHeaders,
  body: JSON.stringify(newData),

})
  .then((res) => {
    if (res.status === 404) {
      window.location = '/404';
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
        payload: data.article,
      });
    }
  });
export const myArticles = () => (dispatch) => {
  const name = localStorage.getItem('username');
  return fetch(`https://ah-backend-stark-staging.herokuapp.com/api/articles/search/?author=${name}`, {
    method: 'GET',
    headers: myHeaders,
  })
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_ARTICLES,
      payload: data['search results'],
    }));
};


export const deleteArticles = slug => dispatch => fetch(`https://ah-backend-stark-staging.herokuapp.com/api/articles/${slug}`, {
  method: 'DELETE',
  headers: myHeaders,
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
        type: DELETE_ARTICLE,
        payload: data,
      });
    }
  });

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
