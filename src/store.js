import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers';

const store = createStore(combineReducers, applyMiddleware(thunk));

export default store;
