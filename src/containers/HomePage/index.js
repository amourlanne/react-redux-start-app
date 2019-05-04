import React, { Component } from 'react';
import "./style.scss";
// import {Link} from "react-router-dom";
import {Welcome} from "../../components";

class HomePage extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Welcome/>
          <a className="App-link" href="https://github.com/amourlanne/react-redux-start-app">Github</a>
          {/*<Link className="App-link" to="/login">Login</Link>*/}
        </div>
      </div>
    );
  }
}

export default HomePage;

