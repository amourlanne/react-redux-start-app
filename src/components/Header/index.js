import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import {globalActions} from "../../redux/actions/Global";
import {connect} from "react-redux";
import logo from "../../containers/HomePage/logo.svg";

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {value} = e.target;
      const {setAppName} = this.props;

      setAppName(value);
  }

  render() {
    const { appName } = this.props;

    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>
                Welcome to {appName} App
            </h2>
            <a
                className="App-link"
                href="https://github.com/amourlanne/react-redux-start-app"
                target="_blank"
            >
                Github
            </a>
            <Link className="router-link" to="/login">Login</Link>
                <div className="input-group">
                    <input type="text" className="form-control" onChange={this.handleChange} />
                </div>

        </div>
    );
  }
}

function mapStateToProps(state) {
    const { appName } = state.global;

    return {
        appName: appName,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setAppName: (appName) => dispatch(globalActions.setAppName(appName)),
    };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Header);
