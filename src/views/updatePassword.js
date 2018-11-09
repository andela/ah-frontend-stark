import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { passwordUpdater } from '../actions/updatePasswordAction';

export class UpdatePassword extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.state = {
      password: '',
    };
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { password } = this.state;
    const { passwordUpdater: updater } = this.props;
    const userData = {
      user: {
        password,
      },
    };
    updater(userData);
    toast.success('Your password has been updated', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setTimeout(() => {
      this.props.history.push('/');
    }, 4000);
  }

  onChangeHandler(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 offset-2">
            <h2 className="display-3">Password update</h2>
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  name="Password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Password"
                  onChange={this.onChangeHandler}
                />
                <small id="emailHelp" className="form-text text-muted">
                                We'll never share your password with anyone
                                else.
                </small>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

UpdatePassword.propTypes = {
  passwordUpdater: PropTypes.func.isRequired,
  password_update: PropTypes.shape.isRequired,
};

const mapStateToProps = state => ({
  password_update: state,
});
export default connect(mapStateToProps, { passwordUpdater })(UpdatePassword);
