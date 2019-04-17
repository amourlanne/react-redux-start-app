import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <Container fluid>
              Container
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
