import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginAction from '../actions/loginActions';
import '../style/signin.css';
import '../css/social.css';
import { SOCIAL_REDIRECT_URL, SOCIAL_LAUNCH_DEFAULT_URL } from '../common/base';

export class LoginForm extends Component {
  state = {
    user: {
      email: "",
      password: ""
    },
    status: "none"
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const userdata = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    };
    this.props.loginAction(userdata).then(() => {
      const { history } = this.props;
      window.location.reload();
      history.push("/homepage");
    });
  };

  listErrors = message => {
    const errors = message;
    const msg = [];
    msg.push(<hr />);
    for (var key in errors) {
      msg.push(
        <span key={key}>
          {`${key}: ${errors[key]}`}
          <br />
        </span>
      );
    }
    return msg;
  };

  toggleModal = () => {
    this.props.toggleModal();
  }

  handleSocial = (provider) => {
    const queryparams = '?Provider=' + provider + '&RedirectTo=' + SOCIAL_REDIRECT_URL;
    window.location = SOCIAL_LAUNCH_DEFAULT_URL + queryparams;
  };

  render() {
    const { message, status } = this.props;
    return (
      <div>
        <div className="auth-form">
          <form onSubmit={this.handleSubmit} id="login-form">
            <h1 className="centred">Login</h1>
            <br />
            <div className="form-group row">
              <input
                className="form-control auth-input"
                type="text"
                name="email"
                id="email"
                placeholder="Enter email here"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group row">
              <input
                className="form-control auth-input"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password here"
                onChange={this.onChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-submit"
              id="submit"
            >
              Submit
            </button>
            <br />
            <p className="small-text">
              <u>
                <a href="/password-reset/">forgot password?</a>
              </u>{" "}
              /{" "}
              <u>
                <a href="/users/">don't have an account?</a>
              </u>
            </p>
            <hr />
          </form>
          <button type="button" className="btn btn-block google social-btn" onClick={() => this.handleSocial('google')}>
              Login with Google
          </button>
            <br />
          <button type="button" className="btn btn-block facebook social-btn" onClick={() => this.handleSocial('facebook')}>
              Login with Facebook
          </button>
            <br />
          <button type="button" className="btn btn-block twitter social-btn" onClick={() => this.handleSocial('twitter')}>
              Login with Twitter
          </button>
          <div className="auth-error">
            <b>
              {status === "error"
                ? this.listErrors(message)
                : (status === "loading")
                  ? (this.toggleModal())
                  : null}
            </b>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginAction: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  user: state.login.user,
  message: state.login.message,
  status: state.login.status
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginAction }
  )(LoginForm)
);
