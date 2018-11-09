import {
  FETCH_ARTICLES, NEW_ARTICLE, SINGLE_ARTICLE, ERROR_ARTICLE, DELETE_ARTICLE,
} from '../actions/ActionTypes';
import articleReducer from '../reducers/ArticleReducer';

it('article reducer to get all articles', () => {
  articleReducer(
    {},
    {
      type: FETCH_ARTICLES,
    },
  );
});
it('article reducer to create an article', () => {
  articleReducer(
    {},
    {
      type: NEW_ARTICLE,
    },
  );
});
it('article reducer to get an article', () => {
  articleReducer(
    {},
    {
      type: SINGLE_ARTICLE,
    },
  );
});
it('article reducer to get  article errors', () => {
  articleReducer(
    {},
    {
      type: ERROR_ARTICLE,
    },
  );
});
it('article reducer to get delete an  article', () => {
  articleReducer(
    {},
    {
      type: DELETE_ARTICLE,
    },
  );
});
