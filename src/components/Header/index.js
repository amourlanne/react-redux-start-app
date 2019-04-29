import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/banner.jpg';
import './style.scss';
import {globalActions} from "../../redux/actions/Global";
import {connect} from "react-redux";

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      appName: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e) {
    const {value} = e.target;
    this.setState({appName: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const {appName} = this.state;
    const {setAppName} = this.props;

    setAppName(appName);
  }

  render() {
    return (
      <div className="header">
        <a href="https://twitter.com/flexdinesh">
          <img src={Banner} alt="react-redux-boilerplate - Logo" />
        </a>
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/features">
            Features
          </Link>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label htmlFor="prenom">Saisissez le nom de l'app :</label>
              <input type="text" name="appName" id="appName" onChange={this.handleChangeName}/>
              <input type="submit"/>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAppName: (appName) => dispatch(globalActions.setAppName(appName)),
  };
}

export default connect(null, mapDispatchToProps)(Header);
