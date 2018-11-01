import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import LoginPage from './views/login';
import HomePage from './views/home';
import ErrorNotFound from './views/notfound';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={ErrorNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
