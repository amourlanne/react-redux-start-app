import {combineReducers} from 'redux';

import {globalReducer as global} from "./Global";

const rootReducer = combineReducers({
  global,
});

export default rootReducer;
