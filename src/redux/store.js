import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gameReducer from './gameReducer';

const store = createStore(gameReducer, applyMiddleware(thunk));

export default store;
