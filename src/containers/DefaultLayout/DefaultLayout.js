import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {Link} from "react-router-dom";

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <Container fluid>
              Container
              <Link className="router-link" to="/login">
                login
              </Link>
            </Container>
          </main>
        </div>
      </div>
    );
  }


}

export default DefaultLayout;
