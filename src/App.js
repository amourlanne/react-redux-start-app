import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import "./scss/style.scss"
import {connect} from "react-redux";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const HomePage = Loadable({
  loader: () => import('./containers/HomePage/index'),
  loading
});

// Pages
const LoginPage = Loadable({
  loader: () => import('./containers/LoginPage/index'),
  loading
});

const RegisterPage = Loadable({
  loader: () => import('./containers/RegisterPage/index'),
  loading
});

class App extends Component {
  render() {

    const { isReact } = this.props;

    return (
      <div className={`app-wrapper ${isReact ? "react" : "redux"}`}>
        <Helmet
          titleTemplate="%s - React Redux App"
          defaultTitle="React Redux App"
        >
          <meta name="description" content="A React.js Redux application" />
        </Helmet>
        <Switch>
          <Route exact path="/login" name="Login Page" component={LoginPage} />
          <Route exact path="/register" name="Register Page" component={RegisterPage} />
          <Route path="/" name="Home" component={HomePage} />
        </Switch>
      </div>

    );
  }
}

function mapStateToProps(state) {
  const { isReact } = state.theme;

  return {
    isReact: isReact,
  };
}

export default connect(mapStateToProps)(App);
