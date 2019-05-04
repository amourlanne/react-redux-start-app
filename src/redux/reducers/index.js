import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {themeReducer} from "./Theme/reducer";

const rootReducer = combineReducers({
  router: routerReducer,
  theme: themeReducer,
});

export default rootReducer;
