import React, { Component } from 'react';
import {Header, Footer} from "../../components";
import "./style.scss";

class HomePage extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
        <div className="App">
            <Header/>
        </div>
    );
  }
}

export default HomePage;

