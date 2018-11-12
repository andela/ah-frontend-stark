import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './views/home';
import ErrorNotFound from './views/notfound';
import store from './store';
import ResetPassword from './views/ResetPassword';
import Register from './views/Register';
import TempHome from './components/TempHome';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/password-reset/" component={ResetPassword} />
              <Route exact path="/users/" component={Register} />
              <Route exact path="/homepage" component={TempHome} />
              <Route component={ErrorNotFound} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
