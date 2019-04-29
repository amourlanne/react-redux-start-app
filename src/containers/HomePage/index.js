import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {Link} from "react-router-dom";
import {Header, Footer} from "../../components";
import {connect} from "react-redux";

class HomePage extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    const { appName } = this.props;

    return (
      <div className="app">
        <Header/>
        <div className="app-body">
          <main className="main">
            <Container fluid>
              Container
              <Link className="router-link" to="/login">
                login
              </Link>
              <h1>Application : {appName}</h1>
            </Container>
          </main>
        </div>
        <Footer/>
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
export default connect(mapStateToProps)(HomePage);

