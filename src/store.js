import thunk from 'redux-thunk';
import {
  createStore, applyMiddleware, compose,
} from 'redux';
import combineReducers from './reducers';


const store = createStore(
  combineReducers,
  compose(applyMiddleware(thunk)))

export default store;
