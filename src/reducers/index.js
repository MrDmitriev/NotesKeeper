import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import data from './data/data';
import {ActionCreator as dataActionCreator} from './data/data';

export default combineReducers({
  routing: routerReducer,
  data,
});

export const ActionCreator = {
  ...dataActionCreator
};

