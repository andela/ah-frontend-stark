import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class SocialAuth extends Component {
  componentWillMount() {
    const { location } = window;
    const asNewUrl = new URL(location);
    const token = atob(asNewUrl.searchParams.get('t'));
    const username = atob(asNewUrl.searchParams.get('u'));

    if (!token || !username) {
      window.location.replace('/');
    }

    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setTimeout(() => {
      window.location.replace('/homepage');
    }, 1000);
  }

  render() {
    return (
      <div className="container signup-box isValid">
        <Loader type="Bars" color="#8b3f08" height="100" width="100" />
      </div>);
  }
}

export default SocialAuth;
