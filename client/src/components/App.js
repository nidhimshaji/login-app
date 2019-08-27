import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Sample';
import LoginPage from './LoginPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={LoginPage} />
            <LoginPage username="test" password="test" />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
