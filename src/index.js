import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// imported reducers
import addReducer from './app/AppReducers/addReducer';

const reducers = combineReducers({
  addReducer,
})

export default reducers;
