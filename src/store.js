import thunk from 'redux-thunk';
import {
  createStore, applyMiddleware, compose,
} from 'redux';
import combineReducers from './reducers';


const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;
