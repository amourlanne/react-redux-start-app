import React, { Component } from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import {history} from "./helpers";

import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
