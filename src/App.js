import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import './style/article.css';
import './App.scss';
import HomePage from './views/home';
import CreateArticle from './components/CreateArticle';
import UpdateArticle from './components/UpdateArticle';
import AllArticles from './components/AllArticles';
import MyArticles from './components/MyArticles';
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
import SocialAuth from './components/SocialAuth';
import UpdatePassword from './views/updatePassword';
import SuccessPage from './views/successPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class App extends Component {
  render() {
    const username = localStorage.getItem('username');
    return (
      <Provider store={store}>
        <div>
        <ToastContainer />
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/password-reset/" component={ResetPassword} />
              <Route exact path="/password-reset/done" component={UpdatePassword} />
              <Route exact path="/password-reset/success" component={SuccessPage} />
              <Route exact path="/users/" component={Register} />
              <Route exact path="/homepage" component={TempHome} />
              <Route exact path="/createArticle" component={CreateArticle} />
              <Route exact path="/article/:slug/Edit" component={UpdateArticle} />
              <Route exact path="/article/:slug" component={Article} />
              <Route exact path="/getArticles" component={GetArticles} />
              <Route exact path={"/profile/" + username} component={ViewProfile} />
              <Route exact path={"/profile/" + username + "/edit"} component={EditProfile}/>
              <Route exact path="/allArticles" component={AllArticles} />
              <Route exact path="/myArticles" component={MyArticles} />
              <Route exact path="/signup" component={SignupPage} />
              <Route exact path="/signup/verify/" component={AccountVerification} />
              <Route exact path="/social/verify/" component={SocialAuth} />
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
