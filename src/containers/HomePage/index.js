import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {Link} from "react-router-dom";
import {Header, Footer} from "../../components";

class HomePage extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
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
            </Container>
          </main>
        </div>
        <Footer/>
      </div>
    );
  }


}

export default HomePage;
