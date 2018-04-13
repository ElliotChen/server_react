import {combineReducers, createStore, applyMiddleware} from 'redux';
import {taskReducer} from '../_reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//Add new Middleware here
const middleware = [logger, thunk];

const reducers = combineReducers({tasks:taskReducer})
export const store = createStore(reducers, applyMiddleware(...middleware));