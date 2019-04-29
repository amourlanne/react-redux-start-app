import {globalConstants} from "../../constants/Global/constants";

export const globalActions = {
  setAppName,
};

function setAppName(appName) {
  return dispatch => {
    dispatch(dispatchAppName(appName));
  };

  function dispatchAppName(appName) {
    return {type: globalConstants.SET_APP_NAME, appName};
  }
}
