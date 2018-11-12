import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginAction } from "../actions/loginActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/signin.css";

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
    this.props.loginAction(userdata).then(response => {
      if (response.success) {
        const { history } = this.props;
        history.push("/homepage");
      }
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
            <button type="submit" className="btn btn-submit" id="submit">
              Submit
            </button>
            <br />
            <p className="small-text">
              <u>
                <a href="/homepage">forgot password?</a>
              </u>{" "}
              /{" "}
              <u>
                <a href="/users/">don't have an account?</a>
              </u>
            </p>
            <hr />
            <button type="button" className="btn btn-block google">
              Login with Google
            </button>
            <br />
            <button type="button" className="btn btn-block facebook">
              Login with Facebook
            </button>
            <br />
            <button type="button" className="btn btn-block twitter">
              Login with Twitter
            </button>
          </form>
          <div className="auth-error">
            <b>
              {status === "error"
                ? this.listErrors(message)
                : status === "loading"
                ? this.toggleModal()
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
  password: PropTypes.string.isRequired
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
