import {themeConstants} from "../../constants/Theme/constants";

import react from "../../../components/Welcome/images/react.svg";

const initialState = {
  filePath: react,
  isReact: true,
};

export function themeReducer(state = initialState, action) {

  const {
    type,
    payload
  } = action;

  switch (type) {
  case themeConstants.DISPATCH_THEME:
    return {
      ...state,
      filePath: payload.filePath,
      isReact: payload.isReact
    };
  default:
    return state;
  }
}
