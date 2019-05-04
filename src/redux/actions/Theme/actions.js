import {themeConstants} from "../../constants/Theme/constants";

import react from "../../../components/Welcome/images/react.svg";
import redux from "../../../components/Welcome/images/redux.svg";

export const themeActions = {
  setReactTheme,
  setReduxTheme,
};

function setReactTheme() {
  return dispatch => {
    dispatch(dispatchReactTheme());
  };

  function dispatchReactTheme() {
    return {
      type: themeConstants.DISPATCH_THEME,
      payload: {
        filePath: react,
        isReact: true
      }
    };
  }
}

function setReduxTheme() {
  return dispatch => {
    dispatch(dispatchReduxTheme());
  };

  function dispatchReduxTheme() {
    return {
      type: themeConstants.DISPATCH_THEME,
      payload: {
        filePath: redux,
        isReact: false
      }
    };
  }
}
