import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { checkEmail } from '../actions/RestPasswordAction';
import '../style/signin.css';

export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.state = {
      email: '',
      detail: '',
    };
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { email } = this.state;
    const { checkEmail: emailChecker } = this.props;
    const userData = {
      user: {
        email,
      },
    };
    emailChecker(userData);
  }

  onChangeHandler(e) {
    this.setState({ email: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    const detail = nextProps.reset.email.user.detail;
    if (detail === 'Not found.') {
      this.setState({ detail });
    } else {
      this.props.history.push('/password-reset/success');
    }
  }

  render() {
    const defaultDisplay = (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Reset your password</h1>
            <p className="lead">
                         Let's Get you Back To Your Account In No Time
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-5 offset-3">
              <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.onChangeHandler}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted auth-error">
                    { this.state.detail }
                  </small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <Fragment>
        {defaultDisplay}
      </Fragment>
    );
  }
}

ResetPassword.propTypes = {
  checkEmail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  reset: state.reset.user,
});
export default connect(mapStateToProps, { checkEmail })(ResetPassword);
