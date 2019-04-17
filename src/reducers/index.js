import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {globalReducer} from "./Global";

const rootReducer = combineReducers({
  router: routerReducer,
  global: globalReducer,
});

export default rootReducer;
