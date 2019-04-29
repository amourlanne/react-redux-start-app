import { browserHistory } from "../../helpers/BrowserHistory";
import {globalConstants} from "../../constants/Global";

export const globalActions = {
  login,
  logout,
};

function login(email, password) {
  return dispatch => {
    dispatch(request({email}));

   /* authenticationService.login(email,password)
      .then(
        response => {
          dispatch(success(response.token));
          // store jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', response.token);
          browserHistory.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
        }
      );*/
  };

  function request(user) {
    return {type: globalConstants.LOGIN_REQUEST, user};
  }

  function success(token) {
    return {type: globalConstants.LOGIN_SUCCESS, token};
  }

  function failure(error) {
    return {type: globalConstants.LOGIN_FAILURE, error};
  }
}

function logout() {
  // authenticationService.logout();
  browserHistory.push('/login');
  return { type: globalConstants.LOGOUT_REQUEST };
}
