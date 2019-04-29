import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {globalReducer} from "./Global/reducer";

const rootReducer = combineReducers({
  router: routerReducer,
  global: globalReducer,
});

export default rootReducer;
