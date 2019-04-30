import {globalConstants} from "../../constants/Global/constants";

const initialState = {
  appName : "React Redux"
};

export function globalReducer(state = initialState, action) {
  switch (action.type) {
  case globalConstants.SET_APP_NAME:
    return {
      ...state,
      appName: action.appName
    };
  default:
    return state;
  }
}
