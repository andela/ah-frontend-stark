import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import './App.scss';
import HomePage from './views/home';
import CreateArticles from './components/CreateArticle';
import GetArticles from './components/GetArticles';
import Article from './components/ViewArticle';
import ErrorNotFound from './views/notfound';
import store from './store';
import ResetPassword from './views/ResetPassword';
import Register from './views/Register';
import TempHome from './components/TempHome';
import EditProfile from "./views/editProfile";
import ViewProfile from "./views/profile";
import SignupPage from './views/signup';
import AccountVerification from './components/AccountVerification';


class App extends Component {
  render() {
    let username = localStorage.getItem("username");
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/password-reset/" component={ResetPassword} />
              <Route exact path="/users/" component={Register} />
              <Route exact path="/homepage" component={TempHome} />
              <Route exact path="/createArticle" component={CreateArticles} />
              <Route exact path="/article/:slug" component={Article} />
              <Route exact path="/getArticles" component={GetArticles} />
              <Route exact path={"/profile/" + username} component={ViewProfile} />
              <Route exact path={"/profile/" + username + "/edit"} component={EditProfile}/>
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/signup/verify/" component={AccountVerification} />
              <Route component={ErrorNotFound} />
              <Route exact path="/404" component={ErrorNotFound} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
