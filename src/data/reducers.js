import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import siteReducer from './site';

const rootReducer = combineReducers({
  siteReducer,
  routing: routerReducer,
});

export default rootReducer;
