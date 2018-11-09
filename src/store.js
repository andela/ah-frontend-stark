import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(combineReducers, initialState, applyMiddleware(...middleware));

export default store;
